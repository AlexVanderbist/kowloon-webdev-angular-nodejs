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
