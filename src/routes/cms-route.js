const express = require('express');
const Router = express.Router;
const router = new Router();
const path = require('path');

router.get('/', (req, res) => {
  res.app.use(express.static(path.join(__dirname, '../../cms')));
  res.sendFile(path.join(__dirname, '../../cms', 'index.html'));
});

module.exports = router;
