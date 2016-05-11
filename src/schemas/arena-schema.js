import mongoose from 'mongoose';
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

  clanRequestCommon: {
    type: Number,
    require: true,
  },

  clanRequestRare: {
    type: Number,
    require: true,
  },

  clanDonateCommon: {
    type: Number,
    require: true,
  },

  clanDonateRare: {
    type: Number,
    require: true,
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

export default mongoose.model('Arena', ArenaSchema);
