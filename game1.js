const config = {
   // Player stat
   maxSpeed: 20,
   acceleration: 0.8,
   groundDeceleration: 0.9,
   airDeceleration: 0.5,
   jumpPower: 15,
   gravity: 1,
   maxFallSpeed: 20
}

const userInput = {left: false, right: false, jump: false};

class Player{
   constructor(elementID){
      this.element = document.getElementById(elementID);
      this.position = {x: 0, y: 0};
      this.velocity = {x: 0, y: 0};
      this.isGrounded = false;
   }    

   getInput(userInput){
      if(userInput.left && userInput.right){ // if player press "a" & "d" it stop
         this.velocity.x = 0;
      }else if(userInput.left){ // substract acceleration to move left
         this.velocity.x = Math.max(this.velocity.x - config.acceleration, -config.maxSpeed);
      }else if(userInput.right){ // add acceleration to move right
         this.velocity.x = Math.min(this.velocity.x + config.acceleration, config.maxSpeed); 
      }else this.velocity.x *= 1 - config.groundDeceleration; // apply deceleration if player dont move

      if(userInput.jump && this.isGrounded){
         this.velocity.y = -config.jumpPower;
         this.isGrounded = false;
      }
   }

   update(){

      if(!this.isGrounded){
         this.velocity.y += config.gravity;
         this.velocity.y = Math.min(this.velocity.y, config.maxFallSpeed);
      }

      // Check if user is on the ground
      if(this.position.y >= 700){
         this.position.y = 700;
         this.velocity.y = 0;
         this.isGrounded = true;
      }

      // update player position
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
   }

   render(){
      // display the player's new position
      this.element.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`
   }
}

document.addEventListener("keydown",
   (event) => {
      if(event.key === "a") userInput.left = true;
      if(event.key === "d") userInput.right = true;
      if(event.key === " ") userInput.jump = true;
});
document.addEventListener("keyup",
   (event) =>{
      if(event.key === "a") userInput.left = false;
      if(event.key === "d") userInput.right = false;
      if(event.key === " ") userInput.jump = false; 
});


const player = new Player("player");
function gameLoop(){
   player.getInput(userInput);
   player.update();
   player.render();
   requestAnimationFrame(gameLoop);
}
gameLoop();