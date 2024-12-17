export default class CollisionComponent{
   constructor(type, options) {
      this.type = type; // "circle" ou "box"
      this.options = options; // Dimesion selon le type
   }
}
// Exemple :
// new CollisionComponent("box", { width: 50, height: 50 });
// new CollisionComponent("circle", { radius: 25 });