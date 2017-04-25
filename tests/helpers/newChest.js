const suffix = Math.floor(Math.random() * Math.pow(10, 5));

module.exports = {
  name: ['Wooden Chest', 'Silver Chest', 'Golden Chest', 'Crown Chest',
    'Magical Chest', 'Giant Chest', 'Super Magical Chest'][ Math.floor(Math.random() * 4)],
  arena: Math.floor(Math.random() * 9),
  cards: {
    number: Math.floor(Math.random() * 500),
    minRare: Math.floor(Math.random() * 500),
    minEpic: Math.floor(Math.random() * 500),
  },
  gold: {
    min: Math.floor(Math.random() * 500),
    max: (Math.floor(Math.random() * 500) + 500),
  },
  elixirCost: Math.floor(Math.random() * 1000),
  gemCost: Math.floor(Math.random() * 50000000),
  unlock: {
    time: Math.floor(Math.random() * 50),
  },
  suffix
};
