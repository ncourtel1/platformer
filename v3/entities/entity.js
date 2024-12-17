export default class Entity{
   constructor() {
      this.id = crypto.randomUUID();
      this.components = {};
   }

   addComponent(name, component){
      this.components[name] = component;
   }

   getComponent(name){
      return this.components[name];
   }
}