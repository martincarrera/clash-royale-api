const arenaRoute = require('./routes/arena-route');
const cardRoute = require('./routes/card-route');
const chestRoute = require('./routes/chest-route');
const playerRoute = require('./routes/player-route');
const userRoute = require('./routes/user-route');
const mainRoute = require('./routes/main-route');
const cmsRoute = require('./routes/cms-route');
const authRoute = require('./routes/auth-route');
const authMiddleware = require('./middlewares/auth-middleware');

module.exports = (req, res, next) => {
  req.app.use('/', mainRoute);
  req.app.use('/authenticate', authRoute);
  req.app.use(authMiddleware);
  req.app.use('/cms', cmsRoute);
  req.app.use('/api/arenas', arenaRoute);
  req.app.use('/api/cards', cardRoute);
  req.app.use('/api/chests', chestRoute);
  req.app.use('/api/players', playerRoute);
  req.app.use('/api/users', userRoute);
  next();
};
