angular.module('PlayersService', []).factory('Players', function($http) {

    return {
        get : function() {
            return $http.get('/api/players');
        },

        create : function(cardData) {
            return $http.post('/api/players', cardData);
        },

        delete : function(id) {
            return $http.delete('/api/players/' + id);
        }
    }

});
