export class Entity {
  constructor() {
    this.components = {};
  }

  addComponent(name, component) {
    this.components[name] = component;
  }

  getComponent(name) {
    return this.components[name];
  }
}
 
export class ECS {
  constructor() {
    this.entities = [];
    this.systems = [];
  }

  addEntity(entity) {
    this.entities.push(entity);
  }

  addSystem(system) {
    this.systems.push(system);
  }

  update(dt) {
    for (const system of this.systems) {
      system.update(this.entities, dt);
    }
  }
}