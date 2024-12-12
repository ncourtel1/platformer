// Configuration (équivalent à ScriptableStats)
const config = {
  maxSpeed: 20,
  acceleration: 0.4,
  groundDeceleration: 0.4,
  jumpPower: 15,
  gravity: 1.3,
  maxFallSpeed: 20,
  coyoteTime: 200, // milliseconds
  jumpBuffer: 200, // milliseconds
}; 

// Classe Player
class Player {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    this.position = { x: 0, y: 0 }; // Initial position
    this.velocity = { x: 0, y: 0 }; // Speed
    this.isGrounded = false;
    this.lastGroundedTime = 0; // For coyote time
    this.jumpBufferedTime = 0; // For jump buffer
  }

  getInput(input) {
    // Déplacement horizontal
    if (input.left) this.velocity.x = Math.max(this.velocity.x - config.acceleration, -config.maxSpeed);
    else if (input.right) this.velocity.x = Math.min(this.velocity.x + config.acceleration, config.maxSpeed);
    else this.velocity.x *= 1 - config.groundDeceleration;

    // Saut
    if (input.jump) {
      this.jumpBufferedTime = Date.now();
    }
  }

  update() {
    // Appliquer la gravité
    if (!this.isGrounded) {
      this.velocity.y += config.gravity;
      this.velocity.y = Math.min(this.velocity.y, config.maxFallSpeed);
    }

    // Gestion du saut
    const canJump =
      this.isGrounded || Date.now() - this.lastGroundedTime < config.coyoteTime;
    if (this.jumpBufferedTime && Date.now() - this.jumpBufferedTime < config.jumpBuffer && canJump) {
      this.velocity.y = -config.jumpPower;
      this.isGrounded = false;
      this.jumpBufferedTime = 0; // Consomme le saut buffer
    }

    // Mise à jour des positions
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Détection du sol
    if (this.position.y >= 700) {
      this.position.y = 700;
      this.velocity.y = 0;
      this.isGrounded = true;
      this.lastGroundedTime = Date.now();
    }
  }

  render() {
    this.element.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`;
  }
}

// Inputs
const input = { left: false, right: false, jump: false };
document.addEventListener("keydown", (e) => {
  if (e.key === "a") input.left = true;
  if (e.key === "d") input.right = true;
  if (e.key === " ") input.jump = true;
});
document.addEventListener("keyup", (e) => {
  if (e.key === "a") input.left = false;
  if (e.key === "d") input.right = false;
  if (e.key === " ") input.jump = false;
});

// Initialisation
const player = new Player("player");
function gameLoop() {
  player.getInput(input);
  player.update();
  player.render();
  requestAnimationFrame(gameLoop);
}
gameLoop();