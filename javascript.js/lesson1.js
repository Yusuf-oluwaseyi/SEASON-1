// javascript lessons

// performing a function that interchange variables
function test () {
    var a = 3;
    var b = 8;

    // solution
    var c = a;
    a = b;
    b = c;

    console.log("a is " + a);
    console.log("b is " + b);
}
test ();

// Using .length to count the number of string or character

var tweet = prompt("Tweet");
var tweetCount = tweet.length
alert("You have written " + tweet.length + " character" + " You have " + (140-tweet.length) + " Remaining");

// another solution

alert("You have written " + tweet.length + " character" + " You have " + (140-tweet.length) + " Remaining");

// another task on slice 
var tweet = prompt("Tweet");
var tweetUnder10 = tweet.slice(0,10);
alert(tweet.slice(0,10));
alert ("You have written " + tweet.length + " character" + " You have " + (50-tweetUnder10) + " Remaining");

// another solution

var tweet = alert(prompt("Tweet").slice(0,10));


// using .toUpperCase and .toLowercase()
var name = prompt("What is your name");
firstLetter = name.slice(0,1);
rest = name.slice(1);
var newName = alert("Welcome " + firstLetter.toUpperCase() + rest.toLowerCase());

// calculating dog years(testing integers)

var dogAge = prompt("What is your dog age");
var humanAge = (dogAge - 2)*4 + 21;
alert("The human age is " + humanAge);

// learning functions and how to input in a function

var cost = 2;
function getMilk(money) {
  alert("I can buy " + Math.floor(money/cost) + " bottles" + " with " + money + " dollars");

//   adding return 
        return ("Your change is " + money%cost + " dollars");
  
}

getMilk(17);

// calculating bmi and inputting Math.round()

function bmiCalc(weight, height) {
    var weight = prompt("What's your weight?");
    var height = prompt("What's your height?");
    
    var imb = Math.round(weight/(height*height));
    alert("Your ibm is " + imb);
    
  }
  bmiCalc();

  // Calculating love using Math.random(); and comparative

  function lovers () {
    prompt("What is their name?");
    prompt("What is your name?");
    
    var loveScore = Math.floor(Math.random() * 100 + 1);
    alert("Your lovescore is " + loveScore + "%");
    
    if (loveScore > 50) {
      alert("You are love birds");
    }
    else if (loveScore <= 30) {
      alert("Water yourselves more");
    }
    else {
      alert ("Run before breakfast show lol");
    }
    }
    lovers();

    // Using comparatives to check for a leap year, if else statements

    function isLeap() {
      var year = prompt("Enter the year");
    
      if (year % 4 === 0) {
        if (year % 100 === 0) {
          if (year % 400 === 0) {
            alert("Leap year")
          } else {
            alert("Not a leap year")
          }
        } else {
          alert("Leap year")
        }
      } else {
        alert("Not a leap year");
      }
    }
    
    isLeap();

    // lesson on arrays and using the .include functiom

    var guestLists = ["James", "Bamike", "Itunu", "Glory"];

    var guestName = prompt("What is your name?");
    if (guestLists.includes(guestName)) {
      alert("Welcome to the party!");
    }
    else {
      alert("Sorry, please get a ticket next time");
    }


    // FizzBuzz Challenge... Using while loop and .push

    var output = [];
var i = 1;


function FizzBuzz() {

  output.push(i);

  while (i <= 30) {
    if (i % 5 === 0 && i % 3 == 0) {
      output.push("FizzBuzz");
      console.log("FizzBuzz");
      alert("FizzBuzz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
      console.log("Buzz");
      alert("Buzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
      console.log("Fizz");
      alert("Fizz");
    } else {
      alert(i);
    }

    i++;
  }
  console.log(output);

}
FizzBuzz();
