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
      leagues: 'api/leagues',
    },
    version: '1.4.0',
    lastUpdate: 'January 12 2018',
  });
});

module.exports = router;
