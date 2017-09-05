angular.module("quoteBook").service('dataService', function(){

  var quotes = [
      { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
      { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
      { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
      { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
      { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
      { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
      { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
      ];
  

  this.getQuotes = function(){          //Returns the quotes array.
    return quotes;
  };

//Returns true on success.
  this.addData = function(newQuote){        //Takes a data object as an argument, verifies the data object has all the right properties (text and author), and that they have defined values, pushes that object to the quotes array.
    if(newQuote.text && newQuote.author){
      quotes.push(newQuote);
      return true;
    }
    return false;
  };

  this.removeData = function(textToRemove){   //Takes in the text of a quote, loops through the quotes array, and removes the proper quote from the array.
    for (var i=0;i<quotes.length;i++){
      if (quotes[i].text.toLowerCase() === textToRemove.toLowerCase()){
        quotes.splice(i--,1);
      }
    }
  };
});