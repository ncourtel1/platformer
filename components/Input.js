export default class Input {
   constructor() {
     this.left = false;
     this.right = false;
     this.jump = false;
 
     window.addEventListener('keydown', (e) => {
       if (e.key === 'ArrowRight') this.right = true;
       if (e.key === 'ArrowLeft') this.left = true;
       if (e.key === ' ') this.jump = true;
     });
 
     window.addEventListener('keyup', (e) => {
       if (e.key === 'ArrowRight') this.right = false;
       if (e.key === 'ArrowLeft') this.left = false;
       if (e.key === ' ') this.jump = false;
     });
   }
}