export default class RunSystem{
   // Basic player horizontal movements
   update(entities, dt){
      for(const entity of entities){
         const position = entity.getComponent('position');
         const velocity = entity.getComponent('velocity');
         const input = entity.getComponent('input');
         const playerData = entity.getComponent('data')

         if(position && velocity){
            position.x += velocity.vx * input.x
            //console.log(position.x)
         }
      }
   }
}