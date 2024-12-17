export default class RenderSystem{
   constructor(container){
      this.container = container;
   }

   update(entities, dt){
      for(const entity of entities){
         const position = entity.getComponent('position');
         const visual = entity.getComponent('visual');

         if(position && visual){
            let entityElement = document.getElementById(entity.id);

            if(!entityElement){
               entityElement = document.createElement('div');
               entityElement.id = entity.id;
               this.container.appendChild(entityElement);
            }

            entityElement.style.position = 'absolute';
            entityElement.style.transform = `translate(${position.x}px, ${position.y}px)`
            entityElement.style.width = `${visual.width}px`;
            entityElement.style.height = `${visual.height}px`;
            entityElement.style.backgroundColor = visual.color;
         }
      }

   }
}