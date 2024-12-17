export default class CollisionComponent{
   constructor(type, size) {
      this.type = type; // "circle" ou "box"
      this.size = size; // Dimesion selon le type
   }
}
// Exemple :
// new CollisionComponent("box", { width: 50, height: 50 });
// new CollisionComponent("circle", { radius: 25 });