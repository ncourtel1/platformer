export class PhysicsComponent {
   constructor(x, y) {
      this.velocity = {x: 0, y: 0},
      this.position = {x: x, y: y},
      this.gravity = {x: 0, y: 9.81}
   }
};