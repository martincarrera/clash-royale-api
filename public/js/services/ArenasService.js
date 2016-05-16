angular.module('ArenasService', []).factory('Arenas', function($http) {

    return {
        get : function() {
            return $http.get('/api/arenas');
        },

        create : function(cardData) {
            return $http.post('/api/arenas', cardData);
        },

        delete : function(id) {
            return $http.delete('/api/arenas/' + id);
        }
    }

});
