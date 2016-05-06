'use strict';

var fs = require('fs');
var _ = require('lodash');

module.exports = function (path, options) {
  const opt = options || {};
  var modules = {};
  var files = fs.readdirSync(path);

  files.forEach(file => {
    if (/\.js$/.test(file) && file !== 'index.js') {
      var name = file;

      if (opt.stripFromName) {
        name = name.replace(opt.stripFromName, '');
      }

      name = _.camelCase(name.replace(/\.js/, ''));

      modules[name] = require(path + '/' + file);
    }
  });

  return modules;
};
