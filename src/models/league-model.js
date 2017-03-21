const Model = require('../libraries/model');
const League = require('../schemas/league-schema');
const ChestModel = require('../models/chest-model');

class LeagueModel extends Model {

  create(input) {
    const newSchemaModel = new this.SchemaModel(input);
    const chestPromise = ChestModel.find({ league: newSchemaModel.number });
    return Promise.resolve(chestPromise)
      .then(response => {
        /* eslint-disable no-underscore-dangle */
        newSchemaModel.chests = response.map(chest => chest._id);
        /* eslint-enable no-underscore-dangle */
        return newSchemaModel.saveAsync();
      });
  }
}

module.exports = new LeagueModel(League);
