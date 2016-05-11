import arenaRouter from './routers/arena-router';
import cardRouter from './routers/card-router';
import chestRouter from './routers/chest-router';
import playerRouter from './routers/player-router';
import router from './routers/router';

module.exports = (req, res, next) => {
  req.app.use('/', router);
  req.app.use('/api/arenas', arenaRouter);
  req.app.use('/api/cards', cardRouter);
  req.app.use('/api/chests', chestRouter);
  req.app.use('/api/players', playerRouter);
  next();
};
