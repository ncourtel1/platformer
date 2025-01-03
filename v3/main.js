import ECS from "./systems/Ecs.js";
import createPlayer from "./entities/createPlayer.js";
import createObject from "./entities/createObject.js";
import RunSystem from "./systems/RunSystem.js";
import RenderSystem from "./systems/renderSystem.js";
import CollisionSystem from "./systems/collisionSystem.js";
import CameraSystem from "./systems/cameraSystem.js";
import JumpSystem from "./systems/jumpSystem.js";
import GravitySystem from "./systems/gravitySystem.js";

const ecs = new ECS();
<<<<<<< HEAD
const player = createPlayer(100, 500, 1, 1, "white", 100, 100);
ecs.addEntity(player);
//const obj1 = createObject(200, 500, "green", 32, 32);
//ecs.addEntity(obj1);
=======
const obj1 = createObject(600, 500, "green", 32, 32);
ecs.addEntity(obj1);
const player = createPlayer(300, 100, 30, 30, "white", 100, 100);
ecs.addEntity(player);

>>>>>>> 87bb1700b118043a03be135d69d08543ea2529f8

const game_container = document.getElementById("game-container");

let cameraSys = new CameraSystem(game_container, player, 400, 400);
ecs.addSystem(new CollisionSystem(game_container, cameraSys));
ecs.addSystem(new RunSystem());
ecs.addSystem(new RenderSystem(game_container));

ecs.addSystem(cameraSys);

ecs.addSystem(new JumpSystem());
ecs.addSystem(new GravitySystem());

let lastTime = performance.now();

function gameLoop(time){
   const dt = (time - lastTime) / 1000;
   lastTime = time;

   ecs.update(dt);

   requestAnimationFrame(gameLoop);
}

gameLoop(lastTime);