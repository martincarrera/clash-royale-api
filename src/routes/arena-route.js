const Router = require('express').Router;
const arenaRouter = new Router();
const arena = require('../controllers/arena-controller');

arenaRouter.route('/')
  .get(arena.findSorted.bind(arena))
  .post(arena.create.bind(arena))
  .put(arena.update.bind(arena))
  .delete(arena.remove.bind(arena));

arenaRouter.route('/:id')
  .get(arena.findByIdOrNameId.bind(arena))
  .put(arena.update.bind(arena))
  .delete(arena.remove.bind(arena));

module.exports = arenaRouter;
