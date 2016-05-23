const Controller = require('../libraries/controller');
const User = require('../models/user-model');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const secret = config.SECRET;

class AuthController extends Controller {
  validate(req, res, next) {
    User.findOneWithPassword({ username: req.body.username })
    .then(user => {
      if (!user) {
        return res.status(401).send('Failed to authenticate token.');
      }
      console.log(user);
      const validPassword = user.comparePassword(req.body.password);
      if (!validPassword) {
        return res.status(401).send('Authentication failed. Invalid password.');
      }

      const token = jwt.sign({
        name: user.name,
        username: user.username,
      }, secret, { expiresIn: '24h' });

      return res.status(200).send(token);
    })
    .catch(err => next(err));
  }
}

module.exports = new AuthController();
