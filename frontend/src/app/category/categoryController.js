angular
  .module('app')
  .controller('CategoryController', function () {
    var vm = this;

    vm.orderBy = 'price';

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
        image: 'images/products/happy_dog.jpg',
        price: 25.49,
        multipleImages: true,
        colors: false,
        date: 1,
        collection: []
      },
      {
        name: "Cooling mat snf",
        image: 'images/products/cooling_mat.jpg',
        price: 15.49,
        multipleImages: true,
        colors: false,
        date: 2,
        collection: ["Splash 'n Fun"]
      },
      {
        name: "Cooling mat snf lux",
        image: 'images/products/cooling_mat.jpg',
        price: 33.49,
        multipleImages: true,
        colors: false,
        date: 3,
        collection: ["Splash 'n Fun", "Luxury"]
      },
      {
        name: "Cooling mat",
        image: 'images/products/happy_dog.jpg',
        price: 75.49,
        multipleImages: false,
        colors: true,
        date: 4,
        collection: ["New", "On-sale", "Other"]
      },
      {
        name: "Cooling mat new sale",
        image: 'images/products/happy_dog.jpg',
        price: 59.49,
        multipleImages: true,
        colors: false,
        date: 5,
        collection: ["New", "On-sale"]
      },
      {
        name: "Cooling mat new other",
        image: 'images/products/sleeping_dog.jpg',
        price: 405.49,
        multipleImages: false,
        colors: true,
        date: 6,
        collection: ["Luxury", "New", "Other"]
      },
      {
        name: "New Cooling Lux sale",
        image: 'images/products/sleeping_dog.jpg',
        price: 122.49,
        multipleImages: false,
        colors: true,
        date: 7,
        collection: ["Luxury", "New", "On-sale", "Other"]
      },
      {
        name: "Cooling mat other",
        image: 'images/products/cooling_mat.jpg',
        price: 154.49,
        multipleImages: true,
        colors: false,
        date: 8,
        collection: ["Other"]
      },
      {
        name: "Cooling mat",
        image: 'images/products/happy_dog.jpg',
        price: 115.49,
        multipleImages: false,
        colors: true,
        date: 9,
        collection: ["Splash 'n Fun", "Luxury", "New", "On-sale", "Other"]
      },
      {
        name: "Cooling mat",
        image: 'images/products/cooling_mat.jpg',
        price: 125.49,
        multipleImages: false,
        colors: true,
        date: 10,
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
