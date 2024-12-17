export default class InputSystem {
   update(entities){
      for(const entity of entities){
         const inputComponent = entity.getComponent('input');

         if(inputComponent){
            if(inputComponent.horizontal > 0){
               
            }
         }
      }
   }
}