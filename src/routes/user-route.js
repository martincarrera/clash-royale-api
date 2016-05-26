const Router = require('express').Router;
const userRouter = new Router();

const user = require('../controllers/user-controller');

userRouter.route('/')
  .get(user.find.bind(user))
  .post(user.create.bind(user))
  .put(user.update.bind(user))
  .delete(user.remove.bind(user));

userRouter.route('/:id')
  .get(user.findById.bind(user))
  .put(user.update.bind(user))
  .delete(user.remove.bind(user));

module.exports = userRouter;
