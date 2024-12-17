export class Entity{
   constructor() {
      this.components = {};
   }

   addComponent(name, component){
      this.components[name] = component;
   }

   getComponent(name){
      return this.components[name];
   }
}