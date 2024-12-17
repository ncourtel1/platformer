import InputComponent from "../components/InputComponent.js"
import {PlayerDataComponent} from "../components/PlayerDataComponent.js"
import PositionComponent from "../components/PositionComponent.js"
import VelocityComponent from "./components/velocityComponent.js"
import  Entity  from "./entity.js"

export default function createPlayer(x, y){
   const player = new Entity();
   player.addComponent('input', new InputComponent());
   player.addComponent('data', PlayerDataComponent);
   player.addComponent('position', PositionComponent(x, y));
   player.addComponent('velocity', VelocityComponent());
   return player;
} 