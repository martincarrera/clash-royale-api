const config = require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./router');
const middlewares = require('./middlewares');

const app = express();

function server(mongoose) {
  require('./libraries/promisify-all')(['mongoose']); // eslint-disable-line global-require

  mongoose.connect(config.MONGODB_URL);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan('tiny'));

  app.use(middlewares.cors);

  app.use('/', routes);

  return app;
}

module.exports = server;
