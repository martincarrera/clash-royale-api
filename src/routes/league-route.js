const Router = require('express').Router;
const leagueRouter = new Router();
const league = require('../controllers/league-controller');

leagueRouter.route('/')
  .get(league.findSorted.bind(league))
  .post(league.create.bind(league))
  .put(league.update.bind(league))
  .delete(league.remove.bind(league));

leagueRouter.route('/:id')
  .get(league.findByIdOrNameId.bind(league))
  .put(league.update.bind(league))
  .delete(league.remove.bind(league));

module.exports = leagueRouter;
