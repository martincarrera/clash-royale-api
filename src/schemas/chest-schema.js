import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gemsPerMinute = 0.1;

const ChestSchema = new Schema({

  name: { type: String },

  arena: { type: Number, default: 0 },

  numberOfCards: { type: Number, default: 0 },

  minRare: { type: Number, default: 0 },

  minEpic: { type: Number, default: 0 },

  minGold: { type: Number, default: 0 },

  maxGold: { type: Number, default: 0 },

  gemCost: { type: Number, default: 0 },

  unlockTime: { type: Number },

  unlockGemCost: { type: Number },

});

// @TODO Change function to arrow function.
ChestSchema.pre('save', function preSave(next) {
  if (!this.unlockGemCost) {
    this.unlockGemCost = this.unlockTime * gemsPerMinute;
  }
  next();
});

export default mongoose.model('Chest', ChestSchema);
