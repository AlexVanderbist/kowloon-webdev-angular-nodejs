angular
  .module('app')
  .directive('jumbotronSlider', function () {
    return {
      scope: {
        slides: '=slides'
      },
      templateUrl: 'app/jumbotron-slider/jumbotron-slider.html'
    };
  });
