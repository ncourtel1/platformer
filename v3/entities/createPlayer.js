import InputComponent from "../components/InputComponent.js"
import { PlayerDataComponent } from "../components/PlayerDataComponent.js"
import PositionComponent from "../components/PositionComponent.js"
import VelocityComponent from "../components/VelocityComponent.js"
import VisualComponent from "../components/visualComponent.js"
import CollisionComponent from "../components/collisionComponent.js"
import Entity from "./entity.js"

export default function createPlayer(x, y){
   const player = new Entity();
   player.addComponent('input', new InputComponent());
   player.addComponent('data', PlayerDataComponent);
   player.addComponent('position', new PositionComponent(x, y));
   player.addComponent('velocity', new VelocityComponent(5, 5));
   player.addComponent('visual', new VisualComponent("red", 32, 32))
   player.addComponent('collision', new CollisionComponent());
   return player;
} 