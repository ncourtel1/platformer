import ECS from "./systems/Ecs.js";
import createPlayer from "./entities/createPlayer.js";
import createObject from "./entities/createObject.js";
import RunSystem from "./systems/RunSystem.js";
import RenderSystem from "./systems/renderSystem.js";
import CollisionSystem from "./systems/collisionSystem.js";
import CameraSystem from "./systems/cameraSystem.js";
import JumpSystem from "./systems/jumpSystem.js";

const ecs = new ECS();
const obj1 = createObject(600, 500, "green", 32, 32);
ecs.addEntity(obj1);
const player = createPlayer(300, 100, 30, 30, "white", 100, 100);
ecs.addEntity(player);


const game_container = document.getElementById("game-container");

let cameraSys = new CameraSystem(game_container, player, 400, 400);
ecs.addSystem(new CollisionSystem(game_container, cameraSys));
ecs.addSystem(new RunSystem());
ecs.addSystem(new RenderSystem(game_container));

ecs.addSystem(cameraSys);

ecs.addSystem(new JumpSystem());

let lastTime = performance.now();

function gameLoop(time){
   const dt = (time - lastTime) / 1000;
   lastTime = time;

   ecs.update(dt);

   requestAnimationFrame(gameLoop);
}

gameLoop(lastTime);