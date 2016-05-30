angular.module('clash-royale-api').factory('LoginService', function($http) {

    return {
        authenticate : function(userData) {
          return $http.post('/api/authenticate', userData);
        }
    }

});
