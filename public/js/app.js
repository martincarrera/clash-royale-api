angular.module('clash-royale-api', ['ui.router', 'formly', 'formlyBootstrap', 'ngNotify'])
.config(function ($httpProvider) {

  $httpProvider.interceptors.push('AuthInterceptor');

});
