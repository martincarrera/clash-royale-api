const Router = require('express').Router;
const router = new Router();

import chest from './controllers/chest-controller';
import arena from './controllers/arena-controller';
import card from './controllers/card-controller';
import player from './controllers/player-controller';

router.route('/arenas')
  .get(arena.find.bind(arena))
  .post(arena.create.bind(arena))
  .put(arena.update.bind(arena))
  .delete(arena.remove.bind(arena));

router.route('/arenas/:id')
  .get(arena.findById.bind(arena))
  .put(arena.update.bind(arena))
  .delete(arena.remove.bind(arena));

router.route('/cards')
  .get(card.find.bind(card))
  .post(card.create.bind(card))
  .put(card.update.bind(card))
  .delete(card.remove.bind(card));

router.route('/cards/:id')
  .get(card.findById.bind(card))
  .put(card.update.bind(card))
  .delete(card.remove.bind(card));

router.route('/chests')
  .get(chest.find.bind(chest))
  .post(chest.create.bind(chest))
  .put(chest.update.bind(chest))
  .delete(chest.remove.bind(chest));

router.route('/chests/:id')
  .get(chest.findById.bind(chest))
  .put(chest.update.bind(chest))
  .delete(chest.remove.bind(chest));

router.route('/players')
  .get(player.find.bind(player))
  .post(player.create.bind(player))
  .put(player.update.bind(player))
  .delete(player.remove.bind(player));

router.route('/players/:id')
  .get(player.findById.bind(player))
  .put(player.update.bind(player))
  .delete(player.remove.bind(player));

export default router;
