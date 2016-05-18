const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArenaSchema = new Schema({

  number: {
    unique: true,
    type: Number,
    require: true,
  },

  name: {
    unique: true,
    type: String,
    require: true,
  },

  victoryGold: {
    type: Number,
    require: true,
  },

  minTrophies: {
    type: Number,
    require: true,
  },

  clan: {
    request: {
      common: { type: Number, require: true },
      rare: { type: Number, require: true },
    },
    donate: {
      common: { type: Number, require: true },
      rare: { type: Number, require: true },
    },
  },

  chests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chest',
  }],

  cardUnlocks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card',
  }],

});

module.exports = mongoose.model('Arena', ArenaSchema);
