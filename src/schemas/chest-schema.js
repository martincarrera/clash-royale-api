import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const numberOfArenas = 7;

const ChestSchema = new Schema({

  name: {
    unique: true,
    type: String,
  },

  minRare: [{ type: Number }],

  minEpic: [{ type: Number }],

  minGold: [{ type: Number }],

  maxGold: [{ type: Number }],

});

// @TODO Change function to arrow function.
ChestSchema.pre('save', function preSave(next) {
  if (this.minRare.length === 0) {
    this.minRare = Array(numberOfArenas).fill(0);
  }
  if (this.minEpic.length === 0) {
    this.minEpic = Array(numberOfArenas).fill(0);
  }
  if (this.minGold.length === 0) {
    this.minGold = Array(numberOfArenas).fill(0);
  }
  if (this.maxGold.length === 0) {
    this.maxGold = Array(numberOfArenas).fill(0);
  }
  next();
});

export default mongoose.model('Chest', ChestSchema);
