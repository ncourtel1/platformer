class ScriptableStats {
   constructor() {
       // Mouvements
       this.maxSpeed = 300;  // Augmenté pour compenser l'unité de mesure
       this.acceleration = 1200;
       this.groundDeceleration = 600;
       this.airDeceleration = 300;
       this.groundingForce = 1.5;  // Changé de -1.5 à 0
       this.grounderDistance = 5;

       // Sauts
       this.jumpPower = -500;  // Valeur négative pour monter vers le haut
       this.maxFallSpeed = 800;
       this.fallAcceleration = 1500;
       this.jumpEndEarlyGravityModifier = 3;
       this.coyoteTime = 0.15;
       this.jumpBuffer = 0.2;

       // Configuration des entrées
       this.snapInput = true;
       this.verticalDeadZoneThreshold = 0.3;
       this.horizontalDeadZoneThreshold = 0.1;
   }
}

class PlayerController {
   constructor(element) {
       this.element = element;
       this.stats = new ScriptableStats();
       
       // États du personnage
       this.position = { x: 0, y: 0 };
       this.velocity = { x: 0, y: 0 };
       this.isGrounded = true;  // Commencer au sol
       this.time = 0;
       this.frameLeftGrounded = -Infinity;
       
       // États de saut
       this.jumpToConsume = false;
       this.bufferedJumpUsable = false;
       this.endedJumpEarly = false;
       this.coyoteUsable = false;
       this.timeJumpWasPressed = 0;

       // Initialisation des entrées
       this.input = {
           x: 0,
           jumpDown: false,
           jumpHeld: false
       };

       // Gravité constante
       this.gravity = 1500;

       // Configuration des contrôles
       this.setupControls();
   }

   setupControls() {
       document.addEventListener('keydown', (e) => this.handleKeyDown(e));
       document.addEventListener('keyup', (e) => this.handleKeyUp(e));
   }

   handleKeyDown(e) {
       switch(e.code) {
           case 'ArrowLeft':
               this.input.x = -1;
               break;
           case 'ArrowRight':
               this.input.x = 1;
               break;
           case 'Space':
           case 'KeyC':
               if (!this.input.jumpDown && this.isGrounded) {
                   this.input.jumpDown = true;
                   this.input.jumpHeld = true;
               }
               break;
       }
   }

   handleKeyUp(e) {
       switch(e.code) {
           case 'ArrowLeft':
           case 'ArrowRight':
               this.input.x = 0;
               break;
           case 'Space':
           case 'KeyC':
               this.input.jumpDown = false;
               this.input.jumpHeld = false;
               break;
       }
   }

   update(deltaTime) {
       this.time += deltaTime;
       this.handleMovement(deltaTime);
   }

   handleMovement(deltaTime) {
       this.handleHorizontalMovement(deltaTime);
       this.handleJump(deltaTime);
       this.handleGravity(deltaTime);
       this.applyMovement(deltaTime);
   }

   handleHorizontalMovement(deltaTime) {
       if (this.input.x === 0) {
           const deceleration = this.isGrounded 
               ? this.stats.groundDeceleration 
               : this.stats.airDeceleration;
           
           this.velocity.x = this.moveTowards(
               this.velocity.x, 
               0, 
               deceleration * deltaTime
           );
       } else {
           this.velocity.x = this.moveTowards(
               this.velocity.x, 
               this.input.x * this.stats.maxSpeed, 
               this.stats.acceleration * deltaTime
           );
       }
   }

   handleJump(deltaTime) {
       if (this.input.jumpDown && this.isGrounded) {
           this.executeJump();
       }
   }

   executeJump() {
       if (this.isGrounded) {
           this.velocity.y = this.stats.jumpPower;
           this.isGrounded = false;
           this.input.jumpDown = false;
       }
   }

   handleGravity(deltaTime) {
       // Appliquer la gravité uniquement si le personnage n'est pas au sol
       if (!this.isGrounded) {
           this.velocity.y += this.gravity * deltaTime;

           // Limiter la vitesse de chute
           this.velocity.y = Math.min(this.velocity.y, this.stats.maxFallSpeed);
       }
   }

   applyMovement(deltaTime) {
       // Mise à jour de la position
       this.position.x += this.velocity.x * deltaTime;
       this.position.y += this.velocity.y * deltaTime;

       // Gestion du sol (simplifiée)
       const gameContainerHeight = this.element.parentElement.clientHeight;
       const playerHeight = this.element.clientHeight;

       if (this.position.y + playerHeight >= gameContainerHeight) {
           this.position.y = gameContainerHeight - playerHeight;
           this.velocity.y = 0;
           this.isGrounded = true;
       }

       // Appliquer la position
       this.element.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`;
   }

   moveTowards(current, target, maxDelta) {
       if (Math.abs(target - current) <= maxDelta) return target;
       return current + Math.sign(target - current) * maxDelta;
   }
}

// Exemple d'utilisation
document.addEventListener('DOMContentLoaded', () => {
   const player = document.getElementById('player');
   const playerController = new PlayerController(player);

   let lastTime = 0;
   function gameLoop(currentTime) {
       const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.05);
       playerController.update(deltaTime);
       lastTime = currentTime;
       requestAnimationFrame(gameLoop);
   }
   requestAnimationFrame(gameLoop);
});