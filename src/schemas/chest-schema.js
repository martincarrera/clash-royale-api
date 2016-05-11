import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gemsPerMinute = 0.1;

const ChestSchema = new Schema({

  name: {
    type: String,
    require: true,
  },

  arena: {
    type: Number,
    default: 0,
    require: true,
  },

  numberOfCards: {
    type: Number,
    require: true,
  },

  minRare: {
    type: Number,
    default: 0,
    require: true,
  },

  minEpic: {
    type: Number,
    default: 0,
    require: true,
  },

  minGold: {
    type: Number,
    require: true,
  },

  maxGold: {
    type: Number,
    require: true,
  },

  gemCost: {
    type: Number,
    default: 0,
    require: true,
  },

  unlockTime: {
    type: Number,
    require: true,
  },

  unlockGemCost: {
    type: Number,
  },

});

ChestSchema.index({ name: 1, arena: 1 }, { unique: true });

// @TODO Change function to arrow function.
ChestSchema.pre('save', function preSave(next) {
  if (!this.unlockGemCost) {
    this.unlockGemCost = this.unlockTime * gemsPerMinute;
  }
  next();
});

export default mongoose.model('Chest', ChestSchema);
