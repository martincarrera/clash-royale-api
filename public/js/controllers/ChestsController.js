(function () {

  angular
  .module('clash-royale-api')
  .controller('ChestsController', ChestsController);

  ChestsController.$inject = ['ChestsService', 'ngNotify'];

  function ChestsController(ChestsService, ngNotify) {
    var vm = this;
    vm.title = 'Chests';
    vm.previewTitle = 'Preview Card';
    vm.model = {
      name: 'Wooden Chest'
    };

    vm.fields = [
      {
        key: 'name',
        type: 'select',
        templateOptions: {
          label: 'Chest Name',
          options: [
            { name: 'Wooden Chest', value: 'Wooden Chest' },
            { name: 'Silver Chest', value: 'Silver Chest' },
            { name: 'Golden Chest', value: 'Golden Chest' },
            { name: 'Crown Chest', value: 'Crown Chest' },
            { name: 'Magical Chest', value: 'Magical Chest' },
            { name: 'Giant Chest', value: 'Giant Chest' },
            { name: 'Super Magical Chest', value: 'Super Magical Chest' },
          ]
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
        key: 'cards.number',
        type: 'input',
        templateOptions: {
          label: 'Number of cards',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'cards.minRare',
        type: 'input',
        templateOptions: {
          label: 'Number of minimum Rare cards',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'cards.minEpic',
        type: 'input',
        templateOptions: {
          label: 'Number of minimum Epic cards',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'gold.min',
        type: 'input',
        templateOptions: {
          label: 'Number of minimum Gold',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'gold.max',
        type: 'input',
        templateOptions: {
          label: 'Number of maximum Gold',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'gemCost',
        type: 'input',
        templateOptions: {
          label: 'Amount of gems to buy a chest from store',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'unlock.time',
        type: 'input',
        templateOptions: {
          label: 'Time in minutes to unlock the chest',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'unlock.gemCost',
        type: 'input',
        templateOptions: {
          label: 'Amount of gems needed to unlock the chest',
          placeholder: 0
        },
      },
    ];

    vm.originalFields = angular.copy(vm.fields);

    vm.submit = function(model) {
      ChestsService.create(model)
      .then(function(data) {
        ngNotify.set('Your Chest was successfully saved!', 'success');
        vm.options.resetModel();
      })
      .catch(function(error) {
        ngNotify.set('There was a problem saving your Chest... ', 'error');
      });
    }
  }

})();
