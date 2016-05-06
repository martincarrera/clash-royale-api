'use strict';

var config = require('./config/config');

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var morgan = require('morgan');

var routes = require('./routes');
var middlewares = require('./middlewares');

module.exports = server;

function server(mongoose) {
  require('./libraries/promisify-all')(['mongoose']);

  mongoose.connect(config.MONGODB_URL);

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan('tiny'));

  app.use(middlewares.cors);
  app.use('/api', routes);

  return app;
}
