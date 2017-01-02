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
