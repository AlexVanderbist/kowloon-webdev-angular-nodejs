angular
  .module('app')
  .controller('HomeController', function ($rootScope, $state) {
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

    function checkScrollbars(event, toState) {
      if (toState.name.includes('app.')) {
        angular.element(document).find('body').css('overflow', 'hidden');
      } else {
        angular.element(document).find('body').css('overflow', 'visible');
      }
    }

    function init() {
      checkScrollbars(null, $state.current);

      // Catch statechange to hide scrollbars when overlay is active
      $rootScope.$on('$stateChangeStart', checkScrollbars);
    }

    init();
  });
