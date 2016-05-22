const Model = require('../libraries/model');
const User = require('../schemas/user-schema');

class UserModel extends Model {}

module.exports = new UserModel(User);
