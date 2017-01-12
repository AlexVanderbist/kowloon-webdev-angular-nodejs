angular
  .module('app')
  .controller('SidebarController', function ($rootScope, $state, $timeout) {
    var vm = this;

    vm.menuState = false;

    function hidebar() {
      $timeout(function(){
        vm.menuState = false;
      },300);
    }

    function init() {
      $rootScope.$on('$stateChangeStart', hidebar);
    }

    init();
  });
