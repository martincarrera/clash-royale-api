const Router = require('express').Router;
const playerRouter = new Router();

import player from '../controllers/player-controller';

playerRouter.route('/')
  .get(player.find.bind(player))
  .post(player.create.bind(player))
  .put(player.update.bind(player))
  .delete(player.remove.bind(player));

playerRouter.route('/:id')
  .get(player.findById.bind(player))
  .put(player.update.bind(player))
  .delete(player.remove.bind(player));

export default playerRouter;
