angular
  .module('app', [
    'ui.router',
    'ngTouch',
    'ngAnimate',
    'ui.bootstrap',
    'ui.bootstrap-slider'
  ]);

angular
  .module('app')
  .run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    // Catch statechange to hide scrollbars when overlay is active
    $rootScope.$on('$stateChangeStart',
      function (event, toState) {
        if (toState.name.includes('app.')) {
          // tostate is child of home
          angular.element(document).find('body').css('overflow', 'hidden');
        } else {
          angular.element(document).find('body').css('overflow', 'visible');
        }
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
