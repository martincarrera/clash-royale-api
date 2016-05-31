(function () {

  angular
    .module('clash-royale-api')
    .controller('PlayersController', PlayersController);

  PlayersController.$inject = ['PlayersService'];

  function PlayersController(PlayersService) {
    var vm = this;
    vm.title = 'Players';
    vm.previewTitle = 'Preview Players';
    vm.model = {};
    vm.fields = [
      {
        key: 'level',
        type: 'input',
        templateOptions: {
          label: 'Player Level',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'kingsTower.hitpoints',
        type: 'input',
        templateOptions: {
          label: 'King\'s Tower Hitpoints',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'kingsTower.range',
        type: 'input',
        templateOptions: {
          label: 'King\'s Tower Range',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'kingsTower.damage',
        type: 'input',
        templateOptions: {
          label: 'King\'s Tower Damage',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'kingsTower.hitSpeed',
        type: 'input',
        templateOptions: {
          label: 'King\'s Tower Hit Speed',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'arenaTowers.hitpoints',
        type: 'input',
        templateOptions: {
          label: 'Arena Tower Hitpoints',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'arenaTowers.range',
        type: 'input',
        templateOptions: {
          label: 'Arena Tower Range',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'arenaTowers.damage',
        type: 'input',
        templateOptions: {
          label: 'Arena Tower Damage',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'arenaTowers.hitSpeed',
        type: 'input',
        templateOptions: {
          label: 'Arena Tower Hit Speed',
          required: true,
          placeholder: 0
        }
      },
    ];

    vm.originalFields = angular.copy(vm.fields);

    vm.submit = function(model) {
      PlayersService.create(model)
      .then(function() {
        vm.options.resetModel();
      });
    }
  }

})();
