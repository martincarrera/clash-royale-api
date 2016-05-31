angular.module('clash-royale-api').factory('ChestsService', function($http) {

    return {
        get : function() {
            return $http.get('/api/chests');
        },

        create : function(chestData) {
            return $http.post('/api/chests', chestData);
        },

        delete : function(id) {
            return $http.delete('/api/chests/' + id);
        }
    }

});
