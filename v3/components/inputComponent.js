export default class InputComponent{
   constructor(){
      this.x = 0;
      this.jumpPressed = false;

      window.addEventListener("keydown", (e) =>{
         if(e.key === "a") this.x = -1;
         if(e.key === "d") this.x = 1;
         if(e.key === " ") this.jumpPressed = true;
      });
      window.addEventListener("keydown", (e) =>{
         if(e.key === "a" || e.key === "d") this.x = 0;
         if(e.key === " ") this.jumpPressed = false;
      });
   }
}