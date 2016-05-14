const Router = require('express').Router;
const router = new Router();
import path from 'path';

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

export default router;
