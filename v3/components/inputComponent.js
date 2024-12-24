export default class InputComponent{
   constructor(){
      this.x = 0;
      this.y = 0;
      this.keys = new Set();
      this.jumpPressed = false;

      window.addEventListener("keydown", (e) =>{
         this.keys.add(e.key);
         console.log(e.key)
      })
      window.addEventListener("keyup", (e) =>{
         this.keys.delete(e.key);
      })

      // window.addEventListener("keydown", (e)=>{
      //    if(e.key === "a" && e.key === "d") this.x = 0;
      //    else if(e.key === "a") this.x = -1;
      //    else if(e.key === "d") this.x =1;
      //    if(e.key === " ") this.jumpPressed = true;
      // })
      // window.addEventListener("keyup", (e)=>{
      //    if(e.key === "a" || e.key === "d") this.x = 0;
      //    if(e.key === " ") this.jumpPressed = false;
      // })
   }

   update(){
      this.x = 0;
      this.y = 0;
      this.jumpPressed = false;
      if(this.keys.has("d") && this.keys.has("a")) this.x = 0;
      else if(this.keys.has("d")) this.x = 1;
      else if(this.keys.has("a")) this.x = -1;
      
      if(this.keys.has(" ")) this.jumpPressed = true;
   }
}