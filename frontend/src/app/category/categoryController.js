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

    ];

    function _init() {
    }

    _init();
  });
