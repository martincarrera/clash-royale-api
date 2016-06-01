const suffix = Math.floor(Math.random() * Math.pow(10, 5));

module.exports = {
  level: Math.floor(Math.random() * 13),
  kingsTower: {
    hitpoints: Math.floor(Math.random() * 5000),
    range: Math.floor(Math.random() * 10),
    damage: Math.floor(Math.random() * 300),
    hitSpeed: Math.floor(Math.random() * 5),
  },
  arenaTowers: {
    hitpoints: Math.floor(Math.random() * 5000),
    range: Math.floor(Math.random() * 10),
    damage: Math.floor(Math.random() * 300),
    hitSpeed: Math.floor(Math.random() * 5),
  },
  maxExp: Math.floor(Math.random() * 50000),
  suffix
};
