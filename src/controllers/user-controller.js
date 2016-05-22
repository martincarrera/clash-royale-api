const Controller = require('../libraries/controller');
const UserModel = require('../models/user-model');

class UserController extends Controller {}

module.exports = new UserController(UserModel);
