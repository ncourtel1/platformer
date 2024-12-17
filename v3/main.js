import ECS from "./systems/Ecs.js";
import createPlayer from "./entities/createPlayer.js";
import RunSystem from "./systems/RunSystem.js";
import RenderSystem from "./systems/renderSystem.js";

const ecs = new ECS();
const player = createPlayer(100, 100);
ecs.addEntity(player)

const game_container = document.getElementById("game-container")

ecs.addSystem(new RunSystem());
ecs.addSystem(new RenderSystem(game_container));

let lastTime = performance.now();

function gameLoop(time){
   const dt = (time - lastTime) / 1000;
   lastTime = time

   ecs.update(dt);

   requestAnimationFrame(gameLoop);
}

gameLoop(lastTime);