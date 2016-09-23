var directiveMadness = angular.module('directiveMadness', []);


directiveMadness.directive('navBar', function(){
  return {
    templateUrl: "directives/nav.html",
    restrict: "E",
    scope: {}
  };
});

directiveMadness.directive('mainHeader', function(){
  return {
    template: "<h1><ng-transclude></ng-transclude></h1>",
    restrict: "E",
    scope: {},
    transclude: true
  };
});

directiveMadness.directive('copyright', function(){
  return {
    template: "<p class='center'><ng-transclude></ng-transclude>{{ copyYear | date: 'yyyy' }}</p>",
    restrict: "E",
    scope: {},
    transclude: true,
    link: function(scope) {
      scope.copyYear = new Date();
    }
  };
});

directiveMadness.directive('colorize', function(){
  return {
    restrict: "A",
    scope: {
      color: "@",
      background: "@"
    },
    link: function(scope, element, attr) {
      element.css('color', scope.color);
      element.css('background', scope.background);
    }
  };
});
