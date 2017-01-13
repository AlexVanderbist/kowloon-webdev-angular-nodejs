angular
  .module('app')
  .controller('AboutController', function () {
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

    function _init() {
    }

    _init();
  });
