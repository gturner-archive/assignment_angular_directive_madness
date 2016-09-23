directiveMadness.controller('QuotesCtrl', ['$scope', function($scope) {

}]);

directiveMadness.directive('quoteForm', function(){
  return {
    template: "<q>{{ message }}</q> -{{ author }}"
    restrict: "E",
    scope: {
      message: "@",
      author: "@"
    },
  };
});