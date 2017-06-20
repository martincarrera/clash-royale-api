const suffix = Math.floor(Math.random() * Math.pow(10, 5));

module.exports = {
  name: `League Name ${suffix}`,
  number: Math.floor(Math.random() * 9),
  victoryGold: Math.floor(Math.random() * 50),
  minTrophies: Math.floor(Math.random() * 4000),
  order: Math.floor(Math.random() * 9),
  arena: Math.floor(Math.random() * 9),
  suffix
};
