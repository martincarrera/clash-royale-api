const Router = require('express').Router;
const randomDeckRouter = new Router();
const card = require('../controllers/card-controller');

randomDeckRouter.route('/')
  .get(card.findRandomDeck.bind(card));

module.exports = randomDeckRouter;
