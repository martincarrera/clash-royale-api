(function () {

  function ChestsController() {
    var vm = this;
    vm.title = 'Chests';
  }

  angular
    .module('clash-royale-api')
    .controller('ChestsController', ChestsController);

})();
