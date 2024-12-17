export default class CollisionSystem {
   update(entities) {
      const collidableEntities = entities.filter(entity => entity.getComponent('collision') && entity.getComponent('position'));

      for (let i = 0; i < collidableEntities.length; i++) {
         const entityA = collidableEntities[i];
         const posA = entityA.getComponent('position');
         const collisionA = entityA.getComponent('collision');

         for (let j = i + 1; j < collidableEntities.length; j++) {
            const entityB = collidableEntities[j];
            const posB = entityB.getComponent('position');
            const collisionB = entityB.getComponent('collision');

            // Vérifie si les deux entités sont en collision
            if (this.checkCollision(posA, collisionA, posB, collisionB)) {
               console.log(`Collision detected between Entity ${i} and Entity ${j}`);
               this.handleCollision(entityA, entityB);
            }
         }
      }
   }

   checkCollision(posA, collisionA, posB, collisionB) {
      if (collisionA.type === "circle" && collisionB.type === "circle") {
         return this.circleCollision(posA, collisionA.options, posB, collisionB.options);
      }
      if (collisionA.type === "box" && collisionB.type === "box") {
         return this.boxCollision(posA, collisionA.options, posB, collisionB.options);
      }
      if (collisionA.type === "circle" && collisionB.type === "box") {
         return this.circleBoxCollision(posA, collisionA.options, posB, collisionB.options);
      }
      if (collisionA.type === "box" && collisionB.type === "circle") {
         return this.circleBoxCollision(posB, collisionB.options, posA, collisionA.options);
      }
      return false;
   }

   // Collision cercle-cercle
   circleCollision(posA, circleA, posB, circleB) {
      const dx = posB.x - posA.x;
      const dy = posB.y - posA.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      return distance < circleA.radius + circleB.radius;
   }

   // Collision boîte-boîte
   boxCollision(posA, boxA, posB, boxB) {
      return (
         posA.x < posB.x + boxB.width &&
         posA.x + boxA.width > posB.x &&
         posA.y < posB.y + boxB.height &&
         posA.y + boxA.height > posB.y
      );
   }

   // Collision cercle-boîte
   circleBoxCollision(circlePos, circle, boxPos, box) {
      // Trouver le point le plus proche du cercle dans la boîte
      const closestX = Math.max(boxPos.x, Math.min(circlePos.x, boxPos.x + box.width));
      const closestY = Math.max(boxPos.y, Math.min(circlePos.y, boxPos.y + box.height));

      // Calculer la distance entre le cercle et ce point
      const dx = circlePos.x - closestX;
      const dy = circlePos.y - closestY;

      return dx * dx + dy * dy < circle.radius * circle.radius;
   }

   handleCollision(entityA, entityB) {
      // Logique personnalisée en cas de collision
      const stateA = entityA.getComponent('state');
      const stateB = entityB.getComponent('state');

      // Exemple : Arrêter le mouvement des deux entités
      if (stateA) stateA.isColliding = true;
      if (stateB) stateB.isColliding = true;

      console.log("Handle custom collision logic here.");
   }
}