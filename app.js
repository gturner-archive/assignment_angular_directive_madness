var directiveMadness = angular.module('directiveMadness', []);

directiveMadness.directive('navBar', function(){
  return {
    templateUrl: "directives/nav.html",
    restrict: "E",
    scope: {}
  };
});