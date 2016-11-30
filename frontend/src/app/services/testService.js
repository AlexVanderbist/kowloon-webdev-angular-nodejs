angular
  .module('app')
  .service('testService', function ($log) {
    var svc = this;
    svc.testValue = 'This value is from a service!';

    svc.testFunction = function () {
      $log.log('Test function called from inside service!');
    };
  });
