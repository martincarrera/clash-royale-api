require('dotenv').load();

module.exports = {
  PORT: process.env.PORT || 8085,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/clash-royale-api',
  SECRET: process.env.SECRET || 'IloveClashRoyaleAPIsomuch',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || 1440,
  DISABLE_AUTH: process.env.DISABLE_AUTH || false,
};
