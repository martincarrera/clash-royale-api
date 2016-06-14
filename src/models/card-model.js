const Model = require('../libraries/model');
const Card = require('../schemas/card-schema');

class CardModel extends Model {
  findRandomDeck() {
    return this.SchemaModel.find().execAsync()
    .then(collection => (this.shuffle(collection).slice(0, 8)));
  }

  shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex]; // eslint-disable-line no-param-reassign
      array[randomIndex] = temporaryValue; // eslint-disable-line no-param-reassign
    }
    return array;
  }
}

module.exports = new CardModel(Card);
