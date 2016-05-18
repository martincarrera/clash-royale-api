const Model = require('../libraries/model');
const Player = require('../schemas/player-schema');

class PlayerModel extends Model {}

module.exports = new PlayerModel(Player);
