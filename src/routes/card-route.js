const Router = require('express').Router;
const cardRouter = new Router();

import card from '../controllers/card-controller';

cardRouter.route('/')
  .get(card.find.bind(card))
  .post(card.create.bind(card))
  .put(card.update.bind(card))
  .delete(card.remove.bind(card));

cardRouter.route('/:id')
  .get(card.findById.bind(card))
  .put(card.update.bind(card))
  .delete(card.remove.bind(card));

export default cardRouter;
