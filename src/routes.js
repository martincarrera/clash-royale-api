import arenaRouter from './routers/arena-router';
import cardRouter from './routers/card-router';
import chestRouter from './routers/chest-router';
import playerRouter from './routers/player-router';
import router from './routers/router';

module.exports = (req, res, next) => {
  req.app.use('/', router);
  req.app.use('/api', arenaRouter);
  req.app.use('/api', cardRouter);
  req.app.use('/api', chestRouter);
  req.app.use('/api', playerRouter);
  next();
};
