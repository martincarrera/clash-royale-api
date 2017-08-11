angular.module('clash-royale-api')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
      .state('arenas', {
        url: '/arenas',
        templateUrl: '../views/genericTemplate.html',
        controller: 'ArenasController as vm'
      })
      .state('cards', {
        url: '/cards',
        templateUrl: '../views/genericTemplate.html',
        controller: 'CardsController as vm'
      })
      .state('chests', {
        url: '/chests',
        templateUrl: '../views/genericTemplate.html',
        controller: 'ChestsController as vm'
      })
      .state('players', {
        url: '/players',
        templateUrl: '../views/genericTemplate.html',
        controller: 'PlayersController as vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: '../views/login.html',
        controller: 'LoginController as vm'
      });
  });
