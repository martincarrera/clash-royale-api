const Router = require('express').Router;
const authRouter = new Router();

const auth = require('../controllers/auth-controller');

authRouter.route('/')
  .post(auth.validate.bind(auth));

module.exports = authRouter;
