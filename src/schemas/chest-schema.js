'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChestSchema = new Schema({

  name: {
    unique: true,
    type: String,
  }

});

module.exports = mongoose.model('Chest', ChestSchema);
