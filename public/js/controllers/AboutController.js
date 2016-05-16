(function () {

  function AboutController() {
    var vm = this;
    vm.title = 'About';
  }

  angular
    .module('clash-royale-api')
    .controller('AboutController', AboutController);

})();
