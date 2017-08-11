(function () {

  angular
  .module('clash-royale-api')
  .controller('CardsController', CardsController);

  CardsController.$inject = ['CardsService', 'ngNotify'];

  function CardsController(CardsService, ngNotify) {
    var vm = this;
    vm.title = 'Cards';
    vm.previewTitle = 'Preview Card';
    vm.model = {
      rarity: 'Common',
      type: 'Troop',
    };

    vm.fields = [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Card Name',
          required: true,
          placeholder: 'Card Name'
        }
      },
      {
        key: 'rarity',
        type: 'select',
        templateOptions: {
          label: 'Rarity',
          options: [
            { name: 'Common', value: 'Common' },
            { name: 'Rare', value: 'Rare' },
            { name: 'Epic', value: 'Epic' },
            { name: 'Legendary', value: 'Legendary' }
          ]
        }
      },
      {
        key: 'type',
        type: 'select',
        templateOptions: {
          label: 'Type',
          options: [
            { name: 'Troop', value: 'Troop' },
            { name: 'Building', value: 'Building' },
            { name: 'Spell', value: 'Spell' },
          ]
        }
      },
      {
        key: 'description',
        type: 'input',
        templateOptions: {
          label: 'Card Description',
          required: true,
          placeholder: 'Write the card description here.'
        }
      },
      {
        key: 'arena',
        type: 'input',
        templateOptions: {
          label: 'Arena Number',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'elixirCost',
        type: 'input',
        templateOptions: {
          label: 'Elixir Cost',
          required: true,
          placeholder: 0
        }
      },
    ];

    vm.originalFields = angular.copy(vm.fields);

    vm.submit = function(model) {
      CardsService.create(model)
      .then(function(data) {
        ngNotify.set('Your Card was successfully saved!', 'success');
        vm.options.resetModel();
      })
      .catch(function(error) {
        ngNotify.set('There was a problem saving your Card... ', 'error');
      });
    }
  }

})();
