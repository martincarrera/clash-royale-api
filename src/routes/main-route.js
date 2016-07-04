const Router = require('express').Router;
const router = new Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Clash Royale API!',
    endpoints: {
      arenas: 'api/arenas',
      cards: 'api/cards',
      chests: 'api/chests',
      players: 'api/players',
    },
    version: '1.0.0',
    lastUpdate: 'July 04 2016',
  });
});

module.exports = router;
