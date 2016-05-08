const router = require('express').Router(); // eslint-disable-line new-cap

import chest from './controllers/chest-controller';

router.route('/chests')
  .get(chest.find.bind(chest))
  .post(chest.create.bind(chest))
  .put(chest.update.bind(chest))
  .delete(chest.remove.bind(chest));

router.route('/chests/:id')
  .get(chest.findById.bind(chest))
  .put(chest.update.bind(chest))
  .delete(chest.remove.bind(chest));

export default router;
