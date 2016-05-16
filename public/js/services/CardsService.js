angular.module('CardsService', []).factory('Cards', function($http) {

    return {
        get : function() {
            return $http.get('/api/cards');
        },

        create : function(cardData) {
            return $http.post('/api/cards', cardData);
        },

        delete : function(id) {
            return $http.delete('/api/cards/' + id);
        }
    }

});
