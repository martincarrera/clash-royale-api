const Router = require('express').Router;
const chestRouter = new Router();
const chest = require('../controllers/chest-controller');

chestRouter.route('/')
  .get(chest.findSorted.bind(chest))
  .post(chest.create.bind(chest))
  .put(chest.update.bind(chest))
  .delete(chest.remove.bind(chest));

chestRouter.route('/:id')
  .get(chest.findByIdOrNameId.bind(chest))
  .put(chest.update.bind(chest))
  .delete(chest.remove.bind(chest));

module.exports = chestRouter;
