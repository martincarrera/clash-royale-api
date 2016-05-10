import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gemsPerMinute = 0.1;

const ChestSchema = new Schema({

  name: { type: String },

  arena: { type: Number, default: 0 },

  numberOfCards: { type: Number},

  minRare: { type: Number, default: 0 },

  minEpic: { type: Number, default: 0 },

  minGold: { type: Number },

  maxGold: { type: Number },

  gemCost: { type: Number, default: 0 },

  unlockTime: { type: Number },

  unlockGemCost: { type: Number },

});

ChestSchema.index( { name: 1, arena: 1}, {unique: true});

// @TODO Change function to arrow function.
ChestSchema.pre('save', function preSave(next) {
  if (!this.unlockGemCost) {
    this.unlockGemCost = this.unlockTime * gemsPerMinute;
  }
  next();
});

export default mongoose.model('Chest', ChestSchema);
