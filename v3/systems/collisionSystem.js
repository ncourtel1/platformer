export default class CollisionSystem {
   constructor(container, cameraSystem) {
     this.container = container;
     this.cameraSystem = cameraSystem;
     this.containerRect = container.getBoundingClientRect();
   }
 
   update(entities, dt) {
   }
 }