import { readdirSync } from 'fs';
import { camelCase } from 'lodash';

export default (path, options) => {
  const opt = options || {};
  const modules = {};
  const files = readdirSync(path);

  files.forEach(file => {
    if (/\.js$/.test(file) && file !== 'index.js') {
      let name = file;
      if (opt.stripFromName) {
        name = name.replace(opt.stripFromName, '');
      }
      name = camelCase(name.replace(/\.js/, ''));
      // @TODO: import es6 way, I don't know how to at the moment,
      // System.import doesn't seem to work
      modules[name] = require(`${path}/${file}`);
    }
  });

  return modules;
};
