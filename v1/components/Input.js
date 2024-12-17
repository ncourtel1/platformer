export default class Input {
   constructor() {
     this.left = false;
     this.right = false;
     this.jump = false;
 
     window.addEventListener('keydown', (e) => {
       if (e.key === 'd') this.right = true;
       if (e.key === 'a') this.left = true;
       if (e.key === ' ') this.jump = true;
     });
 
     window.addEventListener('keyup', (e) => {
       if (e.key === 'd') this.right = false;
       if (e.key === 'a') this.left = false;
       if (e.key === ' ') this.jump = false;
     });
   }
}