const fs = require('fs');
const _ = require('lodash');

module.exports = function exports(path, options) {
  const opt = options || {};
  const modules = {};
  const files = fs.readdirSync(path);

  files.forEach(file => {
    if (/\.js$/.test(file) && file !== 'index.js') {
      let name = file; // eslint-disable-line vars-on-top

      if (opt.stripFromName) {
        name = name.replace(opt.stripFromName, '');
      }

      name = _.camelCase(name.replace(/\.js/, ''));

      modules[name] = require(path + '/' + file); // eslint-disable-line global-require, max-len, prefer-template
    }
  });

  return modules;
};
