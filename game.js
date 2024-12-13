const config = {
   // Player stat
   maxSpeed: 20,
   acceleration: 2,
   groundDeceleration: 0.5,
   airDeceleration: 0.5,
   jumpPower: 10,
   gravity: 3,
   maxFallSpeed: 20
}

class Player{
   constructor(elementID){
      this.elementID = document.getElementById("player");
      this.position = {x: 0, y: 0};
      this.velocity = {x: 0, y: 0};
      this.isGrounded = false;
   }
}

function gameLoop(){

}