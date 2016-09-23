directiveMadness.controller('QuotesCtrl', ['$scope', function($scope) {
  $scope.quotes = [];
  $scope.updateQuotes = function(e, quote, author) {
    e.preventDefault();
    $scope.quotes.push(
      {
        quote: quote,
        author: author
      }
    );
  };
}]);

directiveMadness.directive('quoteForm', function(){
  return {
    templateUrl: "directives/quote-form.html",
    restrict: "E",
    scope: true
  };
});

directiveMadness.directive('quoteIndex', function(){
  return {
    templateUrl: "directives/quote-index.html",
    restrict: "E",
    scope: true
  };
});
