import { PlayerEntity } from "./entities/PlayerEntity.js";
import { PlayerMovementSystem } from "./systems/PlayerMovementSystem.js";
import { GravitySystem } from "./systems/GravitySystem.js";

const player = new PlayerEntity(100, 100, "player");

function gameLoop() {
  const deltaTime = 1 / 60;

  // Inputs fictifs (à remplacer par de vrais listeners)
  player.input.horizontal = 1; // Exemple : va à droite

  // Appel des systèmes
  PlayerMovementSystem(player, deltaTime);
  GravitySystem(player, deltaTime);

  // Mise à jour de la position HTML
  player.updateElementPosition();

  requestAnimationFrame(gameLoop);
}

gameLoop();