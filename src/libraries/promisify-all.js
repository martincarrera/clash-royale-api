const _ = require('lodash');
const Promise = require('bluebird');

module.exports = modules => {
  _.each(modules, module => {
    Promise.promisifyAll(require(module)); // eslint-disable-line global-require
  });
};
