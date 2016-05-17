import arenaRoute from './routes/arena-route';
import cardRoute from './routes/card-route';
import chestRoute from './routes/chest-route';
import playerRoute from './routes/player-route';
import mainRoute from './routes/main-route';
import cmsRoute from './routes/cms-route';

module.exports = (req, res, next) => {
  req.app.use('/', mainRoute);
  req.app.use('/cms', cmsRoute);
  req.app.use('/api/arenas', arenaRoute);
  req.app.use('/api/cards', cardRoute);
  req.app.use('/api/chests', chestRoute);
  req.app.use('/api/players', playerRoute);
  next();
};
