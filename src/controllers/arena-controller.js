const Controller = require('../libraries/controller');
const ArenaModel = require('../models/arena-model');

class ArenaController extends Controller {}

module.exports = new ArenaController(ArenaModel);
