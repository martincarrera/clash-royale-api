const Router = require('express').Router;
const playerRouter = new Router();

const player = require('../controllers/player-controller');

playerRouter.route('/')
  .get(player.findSorted.bind(player))
  .post(player.create.bind(player))
  .put(player.update.bind(player))
  .delete(player.remove.bind(player));

playerRouter.route('/:id')
  .get(player.findByIdOrNameId.bind(player))
  .put(player.update.bind(player))
  .delete(player.remove.bind(player));

module.exports = playerRouter;
