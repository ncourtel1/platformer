import ECS from "./systems/Ecs.js";
import createPlayer from "./entities/createPlayer.js";
import createObject from "./entities/createObject.js";
import RunSystem from "./systems/RunSystem.js";
import RenderSystem from "./systems/renderSystem.js";
import CollisionSystem from "./systems/collisionSystem.js";

const ecs = new ECS();
const player = createPlayer(100, 100);
ecs.addEntity(player);
const obj1 = createObject(200, 100);
ecs.addEntity(obj1);

const game_container = document.getElementById("game-container");

ecs.addSystem(new RunSystem());
ecs.addSystem(new RenderSystem(game_container));
ecs.addSystem(new CollisionSystem());

let lastTime = performance.now();

function gameLoop(time){
   const dt = (time - lastTime) / 1000;
   lastTime = time;

   ecs.update(dt);

   requestAnimationFrame(gameLoop);
}

gameLoop(lastTime);