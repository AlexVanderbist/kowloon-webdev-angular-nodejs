angular
  .module('app')
  .service('apiService', function ($http) {
    var svc = this;
    var baseUrl = "https://kwoloon-alexvanderbist.c9users.io/api/";

    svc.newsletterSubscribe = function (email) {
      return $http({
        method: 'POST',
        url: baseUrl + 'newsletter',
        data: {
          email: email
        }
      });
    };
  });
