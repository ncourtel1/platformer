import { ECS } from "./systems/Ecs.js";
import InputSystem from "./systems/InputSystem.js";
import JumpSystem from "./systems/JumpSystem.js";
import TimersSystem from "./systems/TimersSystem.js";
import CreatePlayer from "./entities/CreatePlayer.js";

const ecs = new ECS();
const player = CreatePlayer(100, 100);
ecs.addEntity(player);

// Créer l'élément HTML du joueur
const playerEl = document.createElement('div');
console.log(playerEl);
playerEl.classList.add('player');
document.getElementById('game-container').appendChild(playerEl);

ecs.addSystem(new JumpSystem());
ecs.addSystem(new InputSystem());
ecs.addSystem(new TimersSystem());

let lastTime = performance.now();

function gameLoop(time) {
  const dt = (time - lastTime) / 1000; // Delta time en secondes
  lastTime = time;

  ecs.update(dt);

  // Mise à jour des positions HTML
  const pos = player.getComponent('physics');
  playerEl.style.transform = `translate(${pos.position.x}px, ${pos.position.y}px)`;

  requestAnimationFrame(gameLoop);
}

gameLoop(lastTime);