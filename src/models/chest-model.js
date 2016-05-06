'use strict';

var Model = require('../libraries/model');
var Chest = require('../schemas/chest-schema');

class ChestModel extends Model {
  constructor(SchemaModel) {
    super(SchemaModel);
  }
}

module.exports = new ChestModel(Chest);
