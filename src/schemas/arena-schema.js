import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ArenaSchema = new Schema({

  number: {
    unique: true,
    type: Number,
  },

  name: {
    unique: true,
    type: String,
  },

  victoryGold: { type: Number },

  minTrophies: { type: Number },

  clanRequestCommon: { type: Number },

  clanRequestRare: { type: Number },

  clanDonateCommon: { type: Number },

  clanDonateRare: { type: Number },

  chests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chest',
  }],

  // @TODO: Change this when cards model is added.
  cardUnlocks: [{
    type: 'String',
  }],

});

export default mongoose.model('Arena', ArenaSchema);
