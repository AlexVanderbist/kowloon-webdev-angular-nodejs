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

    vm.relatedProducts = [
      {
        id: 1,
        url: 'images/products/cooling_mat.jpg'
      },
      {
        id: 2,
        url: 'images/products/cooling_mat.jpg'
      },
      {
        id: 3,
        url: 'images/products/cooling_mat.jpg'
      },
      {
        id: 4,
        url: 'images/products/cooling_mat.jpg'
      },
      {
        id: 5,
        url: 'images/products/cooling_mat.jpg'
      },
      {
        id: 6,
        url: 'images/products/cooling_mat.jpg'
      }
    ];

    vm.faq = [
      {
        question: "Why did the web designer drown?",
        answer: "She didn't know how to float left."
      },
      {
        question: "Why was the developer fired?",
        answer: "She was doing less everyday and getting too sassy."
      },
      {
        question: "Why do some developers not get along with others?",
        answer: "They're MEAN developers."
      }
    ];

    function _init() {}

    _init();
  });
