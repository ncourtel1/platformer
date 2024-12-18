export default class JumpSystem{
   update(entities, dt){
      for(const entity of entities){
         const position = entity.getComponent('position');
         const input = entity.getComponent('input');
         const velocity = entity.getComponent('velocity');
         const playerData = entity.getComponent('data');
      }
   }
}