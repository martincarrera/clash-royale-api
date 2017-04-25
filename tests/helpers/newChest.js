const suffix = Math.floor(Math.random() * Math.pow(10, 5));

module.exports = {
  name: ['Wooden Chest', 'Silver Chest', 'Golden Chest', 'Crown Chest',
    'Magical Chest', 'Giant Chest', 'Super Magical Chest'][ Math.floor(Math.random() * 4)],
  arena: Math.floor(Math.random() * 9),
  cards: {
    number: Math.floor(Math.random() * 50000000),
    minRare: Math.floor(Math.random() * 50000),
    minEpic: Math.floor(Math.random() * 5000),
  },
  gold: {
    min: Math.floor(Math.random() * 50000000),
    max: (Math.floor(Math.random() * 5000000000) + 500000000),
  },
  elixirCost: Math.floor(Math.random() * 10000),
  gemCost: Math.floor(Math.random() * 5000),
  unlock: {
    time: Math.floor(Math.random() * 60),
  },
  suffix
};
