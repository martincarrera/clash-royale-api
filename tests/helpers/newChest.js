const suffix = Math.floor(Math.random() * Math.pow(10, 5));

module.exports = {
  name: ['Wooden Chest', 'Silver Chest', 'Golden Chest', 'Crown Chest',
    'Magical Chest', 'Giant Chest', 'Super Magical Chest'][ Math.floor(Math.random() * 4)],
  arena: Math.floor(Math.random() * 9),
  cards: {
    number: Math.floor(Math.random() * 500),
    minRare: Math.floor(Math.random() * 50),
    minEpic: Math.floor(Math.random() * 5),
  },
  gold: {
    min: Math.floor(Math.random() * 50),
    max: (Math.floor(Math.random() * 50) + 50),
  },
  elixirCost: Math.floor(Math.random() * 10),
  gemCost: Math.floor(Math.random() * 5000),
  unlock: {
    time: Math.floor(Math.random() * 1000),
  },
  suffix
};
