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

  idName: {
    type: String,
    unique: true,
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

  leagues: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'League',
  }],

  order: {
    type: Number,
    require: true,
  },

});

ArenaSchema.pre('save', function preSave(next) {
  if (!this.idName) {
    this.idName = JSON.parse(JSON.stringify(this.name.toLowerCase()));
    this.idName = this.idName.replace(/ /g, '-');
    this.idName = this.idName.replace(/\./g, '');
  }
  next();
});

module.exports = mongoose.model('Arena', ArenaSchema);
