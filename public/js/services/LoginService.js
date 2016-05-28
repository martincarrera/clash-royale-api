angular.module('clash-royale-api').factory('LoginService', function($http) {

    return {
        get : function() {
            return $http.get('/api/authentication');
        },

        create : function(userData) {
            return $http.post('/api/authentication', cardData);
        },

        delete : function(id) {
            return $http.delete('/api/authentication/' + id);
        }
    }

});
