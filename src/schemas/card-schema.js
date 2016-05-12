import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CardSchema = new Schema({

  name: {
    type: String,
    unique: true,
    require: true,
  },

  rarity: {
    type: String,
    enum: 'Common Rare Epic Legendary'.split(' '),
    require: true,
  },

  type: {
    type: String,
    enum: 'Troop Building Spell'.split(' '),
    require: true,
  },

  description: {
    type: String,
    require: true,
  },

  arena: {
    type: Number,
    require: true,
  },

  elixirCost: {
    type: Number,
    require: true,
  },

});

export default mongoose.model('Card', CardSchema);
