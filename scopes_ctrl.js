directiveMadness.controller('ScopesCtrl', ['$scope', function($scope) {
  $scope.twoWay = "Graham";
  $scope.oneWay = "Phil";

  $scope.sayHello = function(name) {
    console.log("hello " + name);
  }

}]);

directiveMadness.directive('isolated', function() {
  return {
    restrict: "EA",
    templateUrl: "directives/isolated.html",
    scope: {
      twoWay: "=",
      oneWay: "@",
      sayHello: '&'
    },
    link: function(scope) {
      scope.twoWay = "new Graham";
      scope.oneWay = "new Phil";
      var captured = scope.sayHello;
      scope.sayHello = function(name) {
        captured(name);
        console.log("from isolated scope");
      };
    }

  }
})
