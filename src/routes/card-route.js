const Router = require('express').Router;
const cardRouter = new Router();
const card = require('../controllers/card-controller');

cardRouter.route('/')
  .get(card.findSorted.bind(card))
  .post(card.create.bind(card))
  .put(card.update.bind(card))
  .delete(card.remove.bind(card));

cardRouter.route('/:id')
  .get(card.findByIdOrNameId.bind(card))
  .put(card.update.bind(card))
  .delete(card.remove.bind(card));

module.exports = cardRouter;
