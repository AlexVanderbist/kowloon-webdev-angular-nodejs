angular
  .module('app', [
    'ui.router',
    'ngTouch',
    'ngAnimate',
    'ui.bootstrap',
    'ui.bootstrap-slider',
    'angular-sly'
  ]);

angular
  .module('app')
  .run(function ($rootScope, $state, $stateParams, $window, $location) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    // Init Goolge Analytics
    $window.ga('create', 'UA-89881605-1', 'auto');

    // track pageview on state change
    $rootScope.$on('$stateChangeSuccess', function (event) {
      $window.ga('send', 'pageview', $location.path());
    });
  });

angular.module('app')
  .directive('escKey', function () {
    return function (scope, element, attrs) {
      element.bind('keydown keypress', function (event) {
        if (event.which === 27) { // 27 = esc key
          scope.$apply(function () {
            scope.$eval(attrs.escKey);
          });

          event.preventDefault();
        }
      });
    };
  })
  .directive('autofocus',
  function ($timeout) {
    return {
      restrict: 'A',
      link: function ($scope, $element) {
        $timeout(function () {
          $element[0].focus();
        });
      }
    };
  }
  );
