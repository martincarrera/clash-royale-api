const express = require('express');
const Router = express.Router;
const router = new Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

module.exports = router;
