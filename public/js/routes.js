angular.module('clash-royale-api')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/about');
    $stateProvider
      .state('arenas', {
        url: '/arenas',
        templateUrl: '../views/arenas.html',
        controller: 'ArenasController as vm'
      })
      .state('cards', {
        url: '/cards',
        templateUrl: '../views/cards.html',
        controller: 'CardsController as vm'
      })
      .state('chests', {
        url: '/chests',
        templateUrl: '../views/chests.html',
        controller: 'ChestsController as vm'
      })
      .state('players', {
        url: '/players',
        templateUrl: '../views/players.html',
        controller: 'PlayersController as vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: '../views/about.html',
        controller: 'AboutController as vm'
      });
  });
