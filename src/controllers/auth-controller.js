const Controller = require('../libraries/controller');
const User = require('../models/user-model');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const secret = config.SECRET;
const JWT_EXPIRATION = config.JWT_EXPIRATION;

class AuthController extends Controller {
  validate(req, res, next) {
    if (!req.body.username) {
      return res.status(401).send('Authentication failed. Username not provided.');
    }
    if (!req.body.password) {
      return res.status(401).send('Authentication failed. Password not provided.');
    }

    return User.findOneWithPassword({ username: req.body.username })
    .then(user => {
      if (!user) {
        return res.status(401).send('Authentication failed. Invalid username.');
      }
      const validPassword = user.comparePassword(req.body.password);
      if (!validPassword) {
        return res.status(401).send('Authentication failed. Invalid password.');
      }
      const token = jwt.sign({
        name: user.name,
        username: user.username,
      }, secret, { expiresIn: JWT_EXPIRATION });

      return res.status(200).send(token);
    })
    .catch(err => next(err));
  }
}

module.exports = new AuthController();
