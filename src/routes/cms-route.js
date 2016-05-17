const express = require('express');
const Router = express.Router;
const router = new Router();
import path from 'path';

router.get('/', (req, res) => {
  res.app.use(express.static(path.join(__dirname, '../../public')));
  res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

export default router;
