angular.module('clash-royale-api').factory('LoginService', function($http) {

    return {
        auth: function(userData) {
            return $http.post('/api/authenticate', userData);
        }
    }

});
