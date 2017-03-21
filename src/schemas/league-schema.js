const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeagueSchema = new Schema({

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

  chests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chest',
  }],

  order: {
    type: Number,
    require: true,
  },

  arena: {
    type: Number,
    require: true,
  },

  leagueSeasonReset: {
    type: Number,
  },

});

LeagueSchema.index({ arena: 1, number: 1 }, { unique: true });


LeagueSchema.pre('save', function preSave(next) {
  if (!this.idName) {
    this.idName = JSON.parse(JSON.stringify(this.name.toLowerCase()));
    this.idName = this.idName.replace(/ /g, '-');
    this.idName = this.idName.replace(/\./g, '');
  }
  next();
});

module.exports = mongoose.model('League', LeagueSchema);
