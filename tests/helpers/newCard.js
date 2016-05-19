const suffix = Math.floor(Math.random() * Math.pow(10, 5));

module.exports = {
  name: `Card Name ${suffix}`,
  rarity: 'Common Rare Epic Legendary'.split(' ')[ Math.floor(Math.random() * 4)],
  type: 'Troop Building Spell'.split(' ')[ Math.floor(Math.random() * 3)],
  description: `Card Description ${suffix}`,
  arena: Math.floor(Math.random() * 9),
  elixirCost: Math.floor(Math.random() * 10),
  suffix
};
