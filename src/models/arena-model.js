import Model from '../libraries/model';
import Arena from '../schemas/arena-schema';
import ChestModel from '../models/chest-model';
import CardModel from '../models/card-model';

class ArenaModel extends Model {

  create(input) {
    const newSchemaModel = new this.SchemaModel(input);
    const chestPromise = ChestModel.find({ arena: newSchemaModel.number });
    const cardPromise = CardModel.find({ unlockedInArena: newSchemaModel.number });
    return Promise.all([chestPromise, cardPromise])
      .then(response => {
        newSchemaModel.chests = response[0].map(chest => chest._id); // eslint-disable-line no-underscore-dangle, max-len
        newSchemaModel.cardUnlocks = response[1].map(card => card._id); // eslint-disable-line no-underscore-dangle, max-len
        return newSchemaModel.saveAsync();
      });
  }

}

export default new ArenaModel(Arena);
