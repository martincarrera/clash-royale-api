(function () {

  function CardsController() {
    var vm = this;
    vm.title = 'Cards';
    vm.model = {
    "_id": "5734869359daec0c229d31ce",
    "name": "Royal Giant",
    "rarity": "Common",
    "type": "Troop",
    "description": "Destroying enemy buildings with his massive cannon is his job; making a ragged blond beard look good is his passion.",
    "arena": 7,
    "elixirCost": 6,
    "__v": 0
  };
  }

  angular
    .module('clash-royale-api')
    .controller('CardsController', CardsController);

})();
