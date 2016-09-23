directiveMadness.controller('QuotesCtrl', ['$scope', function($scope) {
  $scope.quotes = [];
  $scope.edits = { index: false }
  // $scope.updateQuotes = function(e, quote, author) {
  //   e.preventDefault();
  //   $scope.quotes.push(
  //     {
  //       quote: quote,
  //       author: author
  //     }
  //   );
  // };
}]);

directiveMadness.directive('quoteForm', function(){
  return {
    templateUrl: "directives/quote-form.html",
    restrict: "E",
    scope: true,
    link: function(scope) {
      scope.addQuote = function(e) {
        if (scope.quoteForm.$valid) {
          e.preventDefault();
          scope.quotes.push(
            {
              quote: scope.quote,
              author: scope.author
            }
          );

          scope.quote="";
          scope.author="";

          scope.quoteForm.$setPristine();
          scope.quoteForm.$setUntouched();
        }
      };
    }
  };
});

directiveMadness.directive('quoteIndex', function(){

  return {
    templateUrl: "directives/quote-index.html",
    restrict: "E",
    scope: {
      quotes: '=',
      edits: '='
    },
    link: function(scope) {
      scope.deleteQuote = function(e, index) {
        e.preventDefault();
        scope.quotes.splice(index, 1);
      };
      scope.editQuote = function(e, index) {
        e.preventDefault();
        console.log(scope);
        if (scope.edits.index === index) {
          scope.quotes[index].quote = scope.newQuote;
          scope.quotes[index].author = scope.newAuthor;
          scope.newQuote = '';
          scope.newAuthor = '';
          scope.edits.index = false;
        } else {
          scope.newQuote = scope.quotes[index].quote;
          scope.newAuthor = scope.quotes[index].author;
          scope.edits.index = index;
        }
      };
    }
  };
});
