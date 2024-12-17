export default class MovementSystem {
   update(entities, dt) {
     for (const entity of entities) {
       const position = entity.getComponent('position');
       const velocity = entity.getComponent('velocity');
       const input = entity.getComponent('input');
       const playerData = entity.getComponent('playerData');
 
       if (position && velocity && input) {
         let control = playerData.runSpeed;
 
         if (input.left) velocity.dx = -control;
         else if (input.right) velocity.dx = control;
         else velocity.dx = 0;
 
         position.x += velocity.dx * dt;
       }
     }
   }
}