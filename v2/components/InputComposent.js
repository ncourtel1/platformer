export class InputComponemt {
   constructor() {
      this.horizontal = 0,
      this.verical = 0,
      this.jumpPressed = false,
      this.jumpReleased = false

      window.addEventListener("keydown", (e) => {
         if(e.key === 'a') this.horizontal = -1;
         if(e.key === 'd') this.horizontal = 1;
         if(e.key === " ") this.jumpPressed = true;
      });
      window.addEventListener("keydown", (e) => {
         if(e.key === "a" || e.key === "d") this.horizontal = 0;
         if(e.key === " ") this.jumpReleased = false;
      })
   }
};