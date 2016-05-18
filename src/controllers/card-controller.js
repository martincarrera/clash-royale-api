const Controller = require('../libraries/controller');
const CardModel = require('../models/card-model');

class CardController extends Controller {}

module.exports = new CardController(CardModel);
