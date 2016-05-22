const Controller = require('../libraries/controller');
const User = require('./user-controller');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const secret = config.SECRET;

class AuthController extends Controller {
  validate(req, res, next) {
    console.log(req.body);
    User.findOne({ username: req.body.username })
    .select('name username password')
    .exec((err, user) => {
      if (err) next(err);
      if (!user) {
        return res.status(401).send('Failed to authenticate token.');
      }
      const validPassword = user.comparePassword(req.body.password);
      if (!validPassword) {
        return res.status(401).send('Authentication failed. Invalid password.');
      }

      const token = jwt.sign({
        name: user.name,
        username: user.username,
      }, secret, { expiresIn: '24h' });

      return res.status(200).send(token);
    });
  }
}

module.exports = new AuthController();
