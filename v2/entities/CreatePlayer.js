import { Entity } from "./Rigidbody"
import { InputComponemt } from "../components/InputComposent"
import MovementComponent from "../components/MovementComponent"
import { StateComponent } from "../components/StateComponent"
import { PhysicsComponent } from "../components/PhysicsComponent"

export default function CreatePlayer(x, y){
   const player = new Entity();
   player.addComponent('input', new InputComponemt());
   player.addComponent('physics', new PhysicsComponent());
   player.addComponent('movement', MovementComponent);
   player.addComponent('state', new StateComponent());
   return player
}