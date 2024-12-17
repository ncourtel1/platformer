export default class JumpSystem {
   update(entities, dt) {
      for (const entity of entities) {
         const stateComponent = entity.getComponent('state');
         const inputComponent = entity.getComponent('input');
         const physicsComponent = entity.getComponent('physics');
         const playerData = entity.getComponent('data');

         if (stateComponent && inputComponent && physicsComponent && playerData) {
            // Si le joueur est en train de sauter et commence à tomber
            if (stateComponent.isJumping && physicsComponent.velocity.y < 0) {
               stateComponent.isJumping = false;

               if (!stateComponent.isWallJumping) {
                  stateComponent.isJumpFalling = true;
               }
            }

            // Annule le wall jump après un certain temps
            if (stateComponent.isWallJumping && dt - stateComponent.wallJumpStartTime > playerData.wallJumpTime) {
               stateComponent.isWallJumping = false;
            }

            // Réinitialise les états si le joueur est au sol
            if (stateComponent.lastOnGroundTime > 0 && !stateComponent.isJumping && !stateComponent.isWallJumping) {
               stateComponent.isJumpCut = false;
               stateComponent.isJumpFalling = false;
            }

            // Gestion du "jump cut" (saut raccourci)
            if (stateComponent.isJumping && inputComponent.jumpReleased) {
               physicsComponent.velocity.y *= 0.5; // Réduit la vitesse verticale
               stateComponent.isJumpCut = true;
               inputComponent.jumpReleased = false; // Réinitialise l'état
            }

            // Déclenche un saut si possible
            if (this.CanJump(stateComponent, playerData) && inputComponent.jumpPressed) {
               stateComponent.isJumping = true;
               stateComponent.isJumpFalling = false;
               stateComponent.isWallJumping = false;
               stateComponent.isJumpCut = false;

               this.Jump(stateComponent, playerData, physicsComponent, inputComponent);
            }
         }
      }
   }

   CanJump(state) {
      return state.lastOnGroundTime > 0 && !state.isJumping && !state.isWallJumping;
   }

   Jump(state, data, physics, input) {
      state.lastPressedJumpTime = 0;
      state.lastOnGroundTime = 0;

      let force = data.jumpForce;
      if (physics.velocity.y < 0 && input.jumpPressed) {
         force -= physics.velocity.y;
      }

      physics.velocity.y = force; // Applique la force de saut
   }
}