import { Entity } from "./Rigidbody.js"
import { InputComponemt } from "../components/InputComponent.js"
import { StateComponent } from "../components/StateComponent.js"
import { PhysicsComponent } from "../components/PhysicsComponent.js"
import { PlayerData } from "../components/PlayerData.js"

export default function CreatePlayer(x, y){
   const player = new Entity();
   player.addComponent('input', new InputComponemt());
   player.addComponent('physics', new PhysicsComponent(x, y));
   player.addComponent('data', PlayerData);
   player.addComponent('state', new StateComponent());
   return player
}