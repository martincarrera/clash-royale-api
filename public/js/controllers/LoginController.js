(function () {

  function LoginController() {
    var vm = this;
    vm.title = 'Log In';
  }

  angular
    .module('clash-royale-api')
    .controller('LoginController', LoginController);

})();
