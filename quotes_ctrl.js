directiveMadness.controller('QuotesCtrl', ['$scope', 'Quote', function($scope, Quote) {
  $scope.quotes = Quote.getQuotes();
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

directiveMadness.directive('quoteForm', ['Quote', function(Quote){
  return {
    templateUrl: "directives/quote-form.html",
    restrict: "E",
    scope: true,
    link: function(scope) {
      scope.addQuote = function(e) {
        if (scope.quoteForm.$valid) {
          e.preventDefault();
          Quote.createQuote(
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
}]);

directiveMadness.directive('quoteIndex', function(){

  return {
    templateUrl: "directives/quote-index.html",
    restrict: "E",
    scope: {
      quotes: '=',
      edits: '='
    },
    link: function(scope) {
      scope.news = {
        author: "",
        quote: ""
      };
      scope.deleteQuote = function(e, index) {
        e.preventDefault();
        scope.quotes.splice(index, 1);
      };
      scope.editQuote = function(e, index, editForm) {
        e.preventDefault();
        if (scope.edits.index === index) {
          if(editForm.$valid) {
            scope.quotes[index].quote = scope.news.quote;
            scope.quotes[index].author = scope.news.author;
            scope.newQuote = '';
            scope.newAuthor = '';
            scope.edits.index = false;
          }
        } else {
          scope.news.quote = scope.quotes[index].quote;
          scope.news.author = scope.quotes[index].author;
          scope.edits.index = index;
        }
      };
    }
  };
});
