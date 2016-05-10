import { each } from 'lodash';
import { promisifyAll } from 'bluebird';

module.exports = modules => {
  each(modules, module => {
    // @TODO: import es6 way, I don't know how to at the moment,
    // System.import doesn't seem to work
    promisifyAll(require(module)); // eslint-disable-line global-require
  });
};
