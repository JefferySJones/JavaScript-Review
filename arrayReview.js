var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
  function last(array) {
    return (array[array.length -1]);
  }
  last(threeItems);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here
  function removeOdds(arr) {
    var result = [];
    arr.forEach(function(e, i) {
      if (e % 2 === 0) {
        result.push(e);
      } 
    });
    return result;
  }

removeOdds(evenArray);
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. 
//Your job is to write a function that will get a random number, 
//then loop through the array to see if that random number is in the array. 
//If it is, alert true, if it's not, alert false

var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here

  
  function checkForRandom(arr) {
    var x = getRandomArbitrary();
    var result = false;
    //Remember, with a forEach you can't put a return statement
    //inside of it or it will just return it to the forEach.
    console.log(x);
    console.log(arr);
    arr.forEach(function(e) {
      if (e === x) {
        result = true;
      }
    });
    return result;
  }
  
  alert(checkForRandom(randomArray));
  


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second = [];
second.push(first);
second.push(6, 7);

  //code here

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here
  function longest(str) {
    var arr = str.split(" ");
    var result = "";
    arr.forEach(function(e) {
      if (e.length > result.length) {
        result = e;
      }
    });
    return result;
  }
  
  longest(sentence);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every first letter in each word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here
  function capitalize(str) {
    var arr = str.split(" ");
    var result = [];
    arr.forEach(function (e) {
      result.push(e.charAt(0).toUpperCase() + e.slice(1));
    });
    return result.join(" ");
  }

capitalize(myPoem);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

function vowelCounter(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    var l = str.charAt(i).toLowerCase();
    if (l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u') {
      count++;
    }
  }
  return count;
}

vowelCounter(theOdyssey);
