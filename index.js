'use strict';
var mongoose = require('mongoose');
var config = require('./src/config/config');

var app = require('./src/app')(mongoose);

app.listen(config.PORT);
console.log(`Listening to port ${config.PORT}`);
