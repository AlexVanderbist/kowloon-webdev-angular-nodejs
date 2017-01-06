angular
  .module('app')
  .directive('newsletterSubscribe', function () {
    return {
      scope: {},
      templateUrl: 'app/newsletter-subscribe/newsletter-subscribe.html',
      controller: newsletterSubscribeController
    };
  });

function newsletterSubscribeController($scope, apiService) {
  $scope.subscribe = function (email) {
    $scope.error = null;
    apiService.newsletterSubscribe(email)
      .then(function onSuccess() {
        $scope.success = true;
        $scope.email = "";
      }, function onError(err) {
        $scope.error = err.data;
      });
  };
}
