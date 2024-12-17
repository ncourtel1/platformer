import { Entity } from '../systems/ecs.js';
import Position from '../components/Position.js';
import Velocity from '../components/Velocity.js';
import Input from '../components/Input.js';
import PlayerData from '../components/PlayerData.js';

export default function createPlayer(x, y) {
  const player = new Entity();
  player.addComponent('position', new Position(x, y));
  player.addComponent('velocity', new Velocity());
  player.addComponent('input', new Input());
  player.addComponent('playerData', PlayerData);
  return player;
}