export default class JumpSystem{
   update(entities, dt){
      for(const entity of entities){
         const position = entity.getComponent('position');
         const input = entity.getComponent('input');
         const velocity = entity.getComponent('velocity');
         const data = entity.getComponent('data');
         const state = entity.getComponent('state');

         if(position && input && state.isGrounded){
            input.update()
            if(input.jumpPressed){
               position.y -= data.jumpForce;
               input.jumpPressed = false;
            } 
         }
      }
   }
}