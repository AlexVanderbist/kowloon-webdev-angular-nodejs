angular
  .module('app')
  .controller('SearchController', function () {
    var vm = this;
    vm.categories = ["Dogs", "Cats", "Fish", "Birds", "Other"];

    vm.results = [
      "a", "b", "c", "d", "e"
    ];
  });
