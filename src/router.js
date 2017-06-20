const arenaRoute = require('./routes/arena-route');
const cardRoute = require('./routes/card-route');
const chestRoute = require('./routes/chest-route');
const playerRoute = require('./routes/player-route');
const leagueRoute = require('./routes/league-route');
const userRoute = require('./routes/user-route');
const randomDeckRouter = require('./routes/random-deck-route');
const mainRoute = require('./routes/main-route');
const cmsRoute = require('./routes/cms-route');
const config = require('./config/config');
const authRoute = require('./routes/auth-route');
const authMiddleware = require('./middlewares/auth-middleware');
const express = require('express');
const path = require('path');

module.exports = (req, res, next) => {
  res.app.use('/images', express.static(path.join(__dirname, '../public/images')));
  req.app.use('/', mainRoute);
  req.app.use('/api/authenticate', authRoute);
  req.app.use('/cms/', cmsRoute);
  if (!config.DISABLE_AUTH) {
    req.app.use(authMiddleware);
  }
  req.app.use('/api/arenas', arenaRoute);
  req.app.use('/api/cards', cardRoute);
  req.app.use('/api/chests', chestRoute);
  req.app.use('/api/players', playerRoute);
  req.app.use('/api/leagues', leagueRoute);
  req.app.use('/api/users', userRoute);
  req.app.use('/api/random-deck', randomDeckRouter);
  next();
};
