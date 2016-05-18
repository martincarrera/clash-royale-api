const config = require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const morgan = require('morgan');

const routes = require('./router');
const middlewares = require('./middlewares');

const port = config.PORT;
const app = express();

require('./libraries/promisify-all')(['mongoose']);

mongoose.connect(config.MONGODB_URL);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(middlewares.cors);

app.listen(port, () => {
  console.log(`Magic happens on port ${port}`); // eslint-disable-line no-console
});

app.use('/', routes);

module.exports = app;
