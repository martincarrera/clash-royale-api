const Controller = require('../libraries/controller');
const ChestModel = require('../models/chest-model');

class ChestController extends Controller {}

module.exports = new ChestController(ChestModel);
