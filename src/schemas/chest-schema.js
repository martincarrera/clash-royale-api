import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gemsPerMinute = 0.1;

const ChestSchema = new Schema({

  name: {
    type: String,
    enum: [
      'Wooden Chest', 'Silver Chest', 'Golden Chest', 'Crown Chest',
      'Magical Chest', 'Giant Chest', 'Super Magical Chest',
    ],
    require: true,
  },

  arena: {
    type: Number,
    default: 0,
    require: true,
  },

  cards: {
    number: { type: Number, require: true },
    minRare: { type: Number, default: 0, require: true },
    minEpic: { type: Number, default: 0, require: true },
  },

  gold: {
    min: { type: Number, require: true },
    max: { type: Number, require: true },
  },

  gemCost: {
    type: Number,
    default: 0,
    require: true,
  },

  unlock: {
    time: { type: Number, require: true },
    gemCost: { type: Number },
  },

});

ChestSchema.index({ name: 1, arena: 1 }, { unique: true });

// @TODO Change function to arrow function.
ChestSchema.pre('save', function preSave(next) {
  if (!this.unlock.gemCost) {
    this.unlock.gemCost = this.unlock.time * gemsPerMinute;
  }
  next();
});

export default mongoose.model('Chest', ChestSchema);
