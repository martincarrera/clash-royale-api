const Model = require('../libraries/model');
const Card = require('../schemas/card-schema');

class CardModel extends Model {}

module.exports = new CardModel(Card);
