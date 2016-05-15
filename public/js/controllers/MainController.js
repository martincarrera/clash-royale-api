(function () {

  function MainController() {
    var vm = this;
    vm.text = 'Sarasa!';
  }

  angular
    .module('clash-royale-api')
    .controller('MainController', MainController);

})();
