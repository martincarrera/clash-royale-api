const Controller = require('../libraries/controller');
const LeagueModel = require('../models/league-model');

class LeagueController extends Controller {}

module.exports = new LeagueController(LeagueModel);
