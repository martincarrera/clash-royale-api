const Controller = require('../libraries/controller');
const CardModel = require('../models/card-model');

class CardController extends Controller {
  findRandomDeck(req, res, next) {
    return this.model.findRandomDeck()
    .then(collection => res.status(200).json(collection))
    .catch(err => next(err));
  }
}

module.exports = new CardController(CardModel);
