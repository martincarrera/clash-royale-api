const Model = require('../libraries/model');
const User = require('../schemas/user-schema');

class UserModel extends Model {
  findOneWithPassword(query, populate) {
    return this.SchemaModel.findOne(query)
      .select('_id username password')
      .populate(populate || '')
      .execAsync();
  }
}

module.exports = new UserModel(User);
