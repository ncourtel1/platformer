import PositionComponent from "../components/PositionComponent.js"
import VisualComponent from "../components/visualComponent.js"
import CollisionComponent from "../components/collisionComponent.js"
import StateComponent from "../components/stateComponent.js"
import Entity from "./entity.js"

// Create Entity object with components attached to it 
export default function createObject(x, y){
   const object = new Entity();
   object.addComponent('position', new PositionComponent(x, y));
   object.addComponent('visual', new VisualComponent("blue", 32, 32))
   object.addComponent('state', new StateComponent());
   //object.addComponent('collision', new CollisionComponent("box", {width:32, height: 32}));
   return object;
} 