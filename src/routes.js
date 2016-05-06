'use strict';

var router = require('express').Router(); // eslint-disable-line new-cap

var controllers = require('./controllers');

router.route('/chests')
  .get(controllers.chest.find.bind(controllers.chest))
  .post(controllers.chest.create.bind(controllers.chest))
  .put(controllers.chest.update.bind(controllers.chest))
  .delete(controllers.chest.remove.bind(controllers.chest));

router.route('/chests/:id')
  .get(controllers.chest.findById.bind(controllers.chest))
  .put(controllers.chest.update.bind(controllers.chest))
  .delete(controllers.chest.remove.bind(controllers.chest));

  module.exports = router;
