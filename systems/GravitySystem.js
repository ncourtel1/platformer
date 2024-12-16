export default class GravitySystem {
   update(entities, dt) {
     for (const entity of entities) {
         const position = entity.getComponent('position')
         const velocity = entity.getComponent('velocity');
         const playerData = entity.getComponent('playerData');
 
         if (velocity) {
            velocity.dy += playerData.gravity * dt;
            velocity.dy = Math.min(velocity.dy, playerData.maxFallSpeed);
         }

         if(position.y > 700) position.y = 700;
         if(position.x < 0) position.x = 0;
      }
   }
}