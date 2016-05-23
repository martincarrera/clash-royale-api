module.exports = {
  PORT: process.env.PORT || 8085,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/clash-royale-api',
  SECRET: process.env.SECRET || 'IloveClashRoyaleAPIsomuch',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '24h',
};
