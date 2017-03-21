const suffix = Math.floor(Math.random() * Math.pow(10, 5));

module.exports = {
  name: `Arena Name ${suffix}`,
  number: Math.floor(Math.random() * 9),
  victoryGold: Math.floor(Math.random() * 50),
  minTrophies: Math.floor(Math.random() * 4000),
  clan: {
      request: {
          common: Math.floor(Math.random() * 50),
          rare: Math.floor(Math.random() * 5),
      },
      donate: {
        common: Math.floor(Math.random() * 50),
        rare: Math.floor(Math.random() * 5),
      },
  },
  league: Math.floor(Math.random() * 50),
  suffix
};
