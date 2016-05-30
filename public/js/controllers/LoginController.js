(function () {

  angular
  .module('clash-royale-api')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['LoginService'];

  function LoginController(LoginService) {
    var vm = this;
    vm.title = 'Log In';
    vm.model = {};
    vm.fields = [
      {
        key: 'user',
        type: 'input',
        templateOptions: {
          label: 'User',
          required: true
        }
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          label: 'Password',
          required: true,
          type: 'password',
        }
      },
    ];

    vm.submit = function(model) {
      LoginService.authenticate(model);
    }
  }

})();
