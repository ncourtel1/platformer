export default class GravitySystem{
<<<<<<< HEAD
    update(entities, dt){
        for(const entity of entities){
            const position = entity.getComponent('position');
            const velocity = entity.getComponent('velocity');
            const playerData = entity.getComponent('data');

            if(velocity){
                velocity.vy += playerData.gravity;
                velocity.vx = Math.min(velocity.vy, playerData.maxFallSpeed);
            }
            if(position.y > 700) position.y = 700;
        }
    }
=======
   update(entities, dt){
      for(const entity of entities){
         const position = entity.getComponent('position');
         const state = entity.getComponent('state');
         const data = entity.getComponent('data')

         if(position && state && data){
            position.y += data.gravity;
            if(position.y >= 700){
               position.y = 700;
               state.isGrounded = true;
            }
            else state.isGrounded = false;
         }
      }
   }
>>>>>>> 87bb1700b118043a03be135d69d08543ea2529f8
}