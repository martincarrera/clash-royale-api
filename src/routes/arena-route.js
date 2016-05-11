const Router = require('express').Router;
const arenaRouter = new Router();

import arena from '../controllers/arena-controller';

arenaRouter.route('/')
  .get(arena.find.bind(arena))
  .post(arena.create.bind(arena))
  .put(arena.update.bind(arena))
  .delete(arena.remove.bind(arena));

arenaRouter.route('/:id')
  .get(arena.findById.bind(arena))
  .put(arena.update.bind(arena))
  .delete(arena.remove.bind(arena));

export default arenaRouter;
