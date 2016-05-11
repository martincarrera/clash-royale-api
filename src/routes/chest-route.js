const Router = require('express').Router;
const chestRouter = new Router();

import chest from '../controllers/chest-controller';

chestRouter.route('/')
  .get(chest.find.bind(chest))
  .post(chest.create.bind(chest))
  .put(chest.update.bind(chest))
  .delete(chest.remove.bind(chest));

chestRouter.route('/:id')
  .get(chest.findById.bind(chest))
  .put(chest.update.bind(chest))
  .delete(chest.remove.bind(chest));

export default chestRouter;
