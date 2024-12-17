export default class TimersSystem {
   update(entities, dt){
      for(const entity of entities){
         const stateComponent = entity.getComponent('state')

         if(stateComponent){
            stateComponent.lastOnGroundTime -= dt;
            stateComponent.lastOnWallTime -= dt;
            stateComponent.lastOnWallRightTime -= dt;
            stateComponent.lastOnWallLeftTime -= dt;
            stateComponent.lastPressedJumpTime -= dt;
         }
      }
   }
}