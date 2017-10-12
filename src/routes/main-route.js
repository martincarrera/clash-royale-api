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
    version: '1.3.0',
    lastUpdate: 'October 12 2017',
  });
});

module.exports = router;
