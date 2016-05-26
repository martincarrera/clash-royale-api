const Model = require('../libraries/model');
const User = require('../schemas/user-schema');
const config = require('../config/config');
const username = config.ADMIN_USERNAME;
const password = config.ADMIN_PASSWORD;

class UserModel extends Model {
  constructor(SchemaModel) {
    super(SchemaModel);
    Promise.resolve(this.SchemaModel.findOne({ username })
    .then(user => {
      if (!user) {
        this.create({ username, password }).execAsync();
      }
    }));
  }

  findOneWithPassword(query, populate) {
    return this.SchemaModel.findOne(query)
      .select('_id username password')
      .populate(populate || '')
      .execAsync();
  }
}

module.exports = new UserModel(User);
