angular.module('clash-royale-api').factory('ArenasService', function($http) {

    return {
        get : function() {
            return $http.get('/api/arenas');
        },

        create : function(arenaData) {
            return $http.post('/api/arenas', arenaData);
        },

        delete : function(id) {
            return $http.delete('/api/arenas/' + id);
        }
    }

});
