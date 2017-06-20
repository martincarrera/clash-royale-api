const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({

  level: {
    unique: true,
    type: Number,
    require: true,
  },

  idName: {
    type: String,
    unique: true,
    require: true,
  },

  kingsTower: {
    hitpoints: { type: Number, require: true },
    range: { type: Number, require: true },
    damage: { type: Number, require: true },
    hitSpeed: { type: Number, require: true },
  },

  arenaTowers: {
    hitpoints: { type: Number, require: true },
    range: { type: Number, require: true },
    damage: { type: Number, require: true },
    hitSpeed: { type: Number, require: true },
  },

  maxExp: {
    type: Number,
    require: true,
  },

  order: {
    type: Number,
    require: true,
  },

});

PlayerSchema.pre('save', function preSave(next) {
  if (!this.idName) {
    this.idName = 'player'.concat('-', this.level);
  }
  next();
});

module.exports = mongoose.model('Player', PlayerSchema);
