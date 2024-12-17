import { ECS } from './systems/ecs.js';
import createPlayer from './entities/Player.js';
import GravitySystem from './systems/GravitySystem.js';
import MovementSystem from './systems/MovementSystem.js';
import JumpSystem from './systems/JumpSystem.js';

const ecs = new ECS();
const player = createPlayer(100, 100);
ecs.addEntity(player);

// Créer l'élément HTML du joueur
const playerEl = document.createElement('div');
playerEl.classList.add('player');
document.getElementById('game-container').appendChild(playerEl);

ecs.addSystem(new GravitySystem());
ecs.addSystem(new MovementSystem());
ecs.addSystem(new JumpSystem());

let lastTime = performance.now();

function gameLoop(time) {
  const dt = (time - lastTime) / 1000; // Delta time en secondes
  lastTime = time;

  ecs.update(dt);

  // Mise à jour des positions HTML
  const pos = player.getComponent('position');
  playerEl.style.transform = `translate(${pos.x}px, ${pos.y}px)`;

  requestAnimationFrame(gameLoop);
}

gameLoop(lastTime);