import { each } from 'lodash';
import { promisifyAll } from 'bluebird';

module.exports = modules => {
  each(modules, module => {
    promisifyAll(require(module));
  });
};
