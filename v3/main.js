import ECS from "./systems/Ecs.js";
import createPlayer from "./entities/createPlayer.js";
import RunSystem from "./systems/RunSystem.js";

const ecs = new ECS();
const player = createPlayer(100, 100);
ecs.addEntity(player)

const playerElement = document.createElement('div');
playerElement.classList.add('player');
document.getElementById('game-container').appendChild(playerElement);

ecs.addSystem(new RunSystem());

let lastTime = performance.now();

function gameLoop(time){
   const dt = (time - lastTime) / 1000;
   lastTime = time

   ecs.update(dt);

   const playerPos = player.getComponent('position');
   playerElement.style.transform = `translate(${playerPos.position.x}px, translate(${playerPos.position.y}px)`

   requestAnimationFrame(gameLoop);
}

gameLoop(lastTime);