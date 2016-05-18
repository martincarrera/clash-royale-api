const Router = require('express').Router;
const router = new Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Clash Royale API!',
  });
});

module.exports = router;
