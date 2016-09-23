directiveMadness.factory('Quote', function() {
  var quotes = [];
  return {
    getQuotes: function() {
      return quotes
    },

    createQuote: function(quote) {
      quotes.push(quote)
    },
  }
});
