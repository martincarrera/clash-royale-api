'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChestSchema = new Schema({

  name: {
    unique: true,
    type: String
  },

  minRare: [{ type: Number }],

  minEpic: [{ type: Number }],

  minGold: [{ type: Number }],

  maxGold: [{ type: Number }]

});

module.exports = mongoose.model('Chest', ChestSchema);
