export default class JumpSystem {
  update(entities) {
    for (const entity of entities) {
      const position = entity.getComponent('position');
      const velocity = entity.getComponent('velocity');
      const input = entity.getComponent('input');
      const playerData = entity.getComponent('playerData');

      if (position && velocity && input.jump) {
        velocity.dy = -playerData.jumpForce;
        input.jump = false;
      }

      position.y += velocity.dy * 0.016; // Simplification du saut
    }
  }
}