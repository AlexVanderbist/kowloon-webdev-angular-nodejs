angular
  .module('app')
  .controller('ProductController', function () {
    var vm = this;

    vm.activeImage = 0;

    vm.images = [
      {
        url: "images/products/cooling_mat.jpg",
        title: "woordje tekst"
      },
      {
        url: "images/products/cooling_mat.jpg",
        title: "woordje tekst"
      },
      {
        url: "images/products/cooling_mat.jpg",
        title: "woordje tekst"
      }
    ];

    function _init() {
    }

    _init();
  });
