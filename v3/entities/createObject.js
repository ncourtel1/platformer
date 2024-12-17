import PositionComponent from "../components/PositionComponent.js"
import VisualComponent from "../components/visualComponent.js"
import CollisionComponent from "../components/collisionComponent.js"
import Entity from "./entity.js"

export default function createObject(x, y){
   const object = new Entity();
   object.addComponent('position', new PositionComponent(x, y));
   object.addComponent('visual', new VisualComponent("blue", 32, 32))
   object.addComponent('collision', new CollisionComponent());
   return object;
} 