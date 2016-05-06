'use strict';

var Controller = require('../libraries/controller');
var ChestModel = require('../models/chest-model');

class ChestController extends Controller {
  constructor(Model) {
    super(Model);
  }
}

module.exports = new ChestController(ChestModel);
