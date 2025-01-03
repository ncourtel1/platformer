export default class JumpSystem{
   update(entities, dt){
      for(const entity of entities){
         const position = entity.getComponent('position');
         const input = entity.getComponent('input');
         const velocity = entity.getComponent('velocity');
<<<<<<< HEAD
         const playerData = entity.getComponent('data');

         if(position && velocity && input.jumpPressed){
            velocity.vy = -playerData.jumpForce;
            input.jumpPressed = false
            position.y += velocity.vx * dt;
=======
         const data = entity.getComponent('data');
         const state = entity.getComponent('state');

         if(position && input && state.isGrounded){
            input.update()
            if(input.jumpPressed){
               position.y -= data.jumpForce;
               input.jumpPressed = false;
            } 
>>>>>>> 87bb1700b118043a03be135d69d08543ea2529f8
         }
      }
         
   }
}  