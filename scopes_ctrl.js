directiveMadness.controller('ScopesCtrl', ['$scope', function($scope) {
  $scope.twoWay = "Graham";
  $scope.oneWay = "Phil";
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
    limit: function(scope) {
      scope.sayHello = function() {
        console.log('Hello!')
      };
    }

  }
})
