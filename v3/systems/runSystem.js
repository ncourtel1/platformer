export default class RunSystem{
   update(entites, dt){
      for(const entity of entites){
         const position = entity.getComponent('position');
         const velocity = entity.getComponent('velocity');
         const input = entity.getComponent('input');
         const playerData = entity.getComponent('data')

         if(position && velocity && input){
            if(input.x != 0){
               position.x += velocity.x * input.x * dt
            }
         }
      }
   }
}