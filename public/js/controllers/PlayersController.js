(function () {

  function PlayersController() {
    var vm = this;
    vm.title = 'Players';
  }

  angular
    .module('clash-royale-api')
    .controller('PlayersController', PlayersController);

})();
