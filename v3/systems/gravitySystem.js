export default class GravitySystem{
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
}