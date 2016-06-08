const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({

  arena: {
    type: Number,
    require: true,
  },

  boost: {
    type: String,
  },

  count: {
    type: Number,
  },

  description: {
    type: String,
    require: true,
  },

  deployTime: {
    type: Number,
  },

  duration: {
    type: Number,
  },

  elixirCost: {
    type: Number,
    require: true,
  },

  idName: {
    type: String,
    unique: true,
    require: true,
  },

  lifetime: {
    type: Number,
  },

  name: {
    type: String,
    unique: true,
    require: true,
  },

  radius: {
    type: Number,
  },

  range: {
    type: Number,
  },

  rarity: {
    type: String,
    enum: 'Common Rare Epic Legendary'.split(' '),
    require: true,
  },

  spawnSpeed: {
    type: Number,
  },

  speed: {
    type: Number,
    enum: ['Very Slow', 'Slow', 'Medium', 'Fast', 'Very Fast'],
  },

  target: {
    type: String,
    enum: ['Air', 'Air & Ground', 'Ground', 'Buildings'],
  },

  type: {
    type: String,
    enum: 'Troop Building Spell'.split(' '),
    require: true,
  },

});

CardSchema.pre('save', function preSave(next) {
  if (!this.idName) {
    this.idName = JSON.parse(JSON.stringify(this.name.toLowerCase()));
    this.idName = this.idName.replace(/ /g, '-');
    this.idName = this.idName.replace(/\./g, '');
  }
  next();
});

module.exports = mongoose.model('Card', CardSchema);
