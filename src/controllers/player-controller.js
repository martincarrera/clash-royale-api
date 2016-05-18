const Controller = require('../libraries/controller');
const PlayerModel = require('../models/player-model');

class PlayerController extends Controller {}

module.exports = new PlayerController(PlayerModel);
