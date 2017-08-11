angular.module('clash-royale-api').factory('CardsService', function($http) {

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
