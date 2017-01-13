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
