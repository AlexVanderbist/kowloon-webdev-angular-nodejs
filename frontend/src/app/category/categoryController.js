angular
  .module('app')
  .controller('CategoryController', function () {
    var vm = this;
    vm.slides = [
      {
        id: 0,
        image: "images/slider/1.jpg"
      },
      {
        id: 1,
        image: "images/slider/2.jpg"
      }
    ];

    vm.collections = [
      {
        name: "Splash 'n Fun",
        on: false
      },
      {
        name: "Luxury",
        on: false
      },
      {
        name: "New",
        on: false
      },
      {
        name: "On-sale",
        on: false
      },
      {
        name: "Other",
        on: false
      }
    ];

    vm.products = [
      {
        name: "Cooling mat none",
        price: 25.49,
        collection: []
      },
      {
        name: "Cooling mat snf",
        price: 15.49,
        collection: ["Splash 'n Fun"]
      },
      {
        name: "Cooling mat snf lux",
        price: 33.49,
        collection: ["Splash 'n Fun", "Luxury"]
      },
      {
        name: "Cooling mat",
        price: 75.49,
        collection: ["New", "On-sale", "Other"]
      },
      {
        name: "Cooling mat new sale",
        price: 59.49,
        collection: ["New", "On-sale"]
      },
      {
        name: "Cooling mat new other",
        price: 405.49,
        collection: ["Luxury", "New", "Other"]
      },
      {
        name: "New Cooling mat Lux on sale",
        price: 122.49,
        collection: ["Luxury", "New", "On-sale", "Other"]
      },
      {
        name: "Cooling mat other",
        price: 154.49,
        collection: ["Other"]
      },
      {
        name: "Cooling mat",
        price: 115.49,
        collection: ["Splash 'n Fun", "Luxury", "New", "On-sale", "Other"]
      },
      {
        name: "Cooling mat",
        price: 125.49,
        collection: ["Splash 'n Fun", "Luxury", "New", "On-sale", "Other"]
      }
    ];

    vm.showAll = true;

    vm.priceFilter = function (a) {
      // if (vm.showAll) {
      //   return true;
      // }

      if (a.price > vm.filter.price[0] && a.price < vm.filter.price[1] ) {
        return true;
      }
      return false;
    };

    vm.collectionFilter = function (a) {
      if (vm.showAll) {
        return true;
      }

      var sel = false;

      for (var collection in vm.collections) {
        var c = vm.collections[collection];
        console.log(c);
        if (c.on) {
          if (a.collection.indexOf(c.name) === -1) {
            return false;
          } else {
            sel = true;
          }
        }
      }
      return sel;
    };

    vm.checkChange = function () {
      for (var c in vm.collections) {
        if (vm.collections[c].on) {
          vm.showAll = false;
          return;
        }
      }
      vm.showAll = true;
    };

    function _init() {}

    _init();
  });
