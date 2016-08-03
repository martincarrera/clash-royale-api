const express = require('express');
const Router = express.Router;
const router = new Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

module.exports = router;
//
// const Router = require('express').Router;
// const router = new Router();
//
// router.get('/', (req, res) => {
//   res.json({
//     message: 'Welcome to Clash Royale API!',
//     endpoints: {
//       arenas: 'api/arenas',
//       cards: 'api/cards',
//       chests: 'api/chests',
//       players: 'api/players',
//     },
//     version: '1.0.0',
//     lastUpdate: 'July 04 2016',
//   });
// });
//
// module.exports = router;
