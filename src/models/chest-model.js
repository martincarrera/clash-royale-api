const Model = require('../libraries/model');
const Chest = require('../schemas/chest-schema');

class ChestModel extends Model {}

module.exports = new ChestModel(Chest);
