import mongoose from 'mongoose';
const Schema = mongoose.Schema;

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

export default mongoose.model('Chest', ChestSchema);
