angular
  .module('app')
  .controller('HomeController', function () {
    var vm = this;
    vm.active = 0;
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

    function _init() {
    }

    _init();
  });
