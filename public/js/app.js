angular.module('clash-royale-api', ['ui.router', 'formly', 'formlyBootstrap'])
.config(function ($httpProvider) {

  $httpProvider.interceptors.push('AuthInterceptor');

});
