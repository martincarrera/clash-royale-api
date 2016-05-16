(function () {

  function ArenasController() {
    var vm = this;
    vm.title = 'Arenas';
  }

  angular
    .module('clash-royale-api')
    .controller('ArenasController', ArenasController);

})();
