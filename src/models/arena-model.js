import Model from '../libraries/model';
import Arena from '../schemas/arena-schema';
import ChestModel from '../models/chest-model';

class ArenaModel extends Model {

  create(input) {
    const newSchemaModel = new this.SchemaModel(input);
    const chestPromise = ChestModel.find({ arena: newSchemaModel.number });
    return Promise.resolve(chestPromise)
      .then(chests => {
        newSchemaModel.chests = chests.map(chest => chest._id); // eslint-disable-line no-underscore-dangle, max-len
        return newSchemaModel.saveAsync();
      });
  }

}

export default new ArenaModel(Arena);
