var here = require('kcd-common-tools/utils/here');

module.exports = {
  output: { library: 'ngFormlyTemplatesBootstrap' },
  externals: {
    angular: 'angular',
    'angular-formly': {
      root: 'ngFormly',
      amd: 'angular-formly',
      commonjs2: 'angular-formly',
      commonjs: 'angular-formly'
    },
    'api-check': {
      root: 'apiCheck',
      amd: 'api-check',
      commonjs2: 'api-check',
      commonjs: 'api-check'
    }
  },
  resolve: {
    alias: {
      'angular-fix': here('src/angular-fix')
    }
  }
};
