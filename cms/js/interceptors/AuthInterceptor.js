angular.module('clash-royale-api').factory('AuthInterceptor',  function($injector, $q) {

  return {
    request: function(config) {
      var token = localStorage.token;
      if (token) {
        config.headers['Authorization'] = token;
      }
      return config;
    },
    responseError : function(response) {
      if (response.status === 401) {
        localStorage.removeItem('token');
        $injector.invoke(function ($state) {
          $state.go('login');
        });
      }
      return $q.reject(response);
    }
  }
});
