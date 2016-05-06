'use strict';

var _ = require('lodash');
var Promise = require('bluebird');

module.exports = function (modules) {
  _.each(modules, module => {
    Promise.promisifyAll(require(module));
  });
};
