const ngModuleName = 'formlyBootstrap';
const angular = require('./angular-fix');
const ngModule = angular.module(ngModuleName, [require('angular-formly')]);
ngModule.constant(
  'formlyBootstrapApiCheck',
  require('api-check')({
    output: {
      prefix: 'angular-formly-bootstrap'
    }
  })
);
ngModule.constant('formlyBootstrapVersion', VERSION);

require('./wrappers')(ngModule);
require('./types')(ngModule);
require('./run')(ngModule);

export default ngModuleName;
