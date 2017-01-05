angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController as home'
    })
    .state('app.search', {
      url: 'search',
      templateUrl: 'app/search/search.html',
      controller: 'SearchController as search'
    })
    .state('app.faq', {
      url: 'faq',
      templateUrl: 'app/faq/faq.html',
      controller: 'FaqController as faq'
    })
    .state('category', {
      url: '/category',
      templateUrl: 'app/category/category.html',
      controller: 'CategoryController as category'
    })
    .state('product', {
      url: '/product',
      templateUrl: 'app/product/product.html',
      controller: 'ProductController as product'
    });
}
