// console.log ('log');

// var random = Math.floor((Math.random() * 10) + 1);

// console.log(random);
// var user= prompt('guess a number from 1 - 10');

// if (random == user)  {console.log("you win")


// } else {console.log("you lose")

// }
//Created an array called Letters and a variable i to help with for loop starting number
var userGuess = [];
var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = document.getElementById("userGuess");
var computerGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];

document.onkeyup = function (event) {

  userGuess.textContent = event.key;
  console.log(userGuess);


  
 
  checkGuesses();
};
  function checkGuesses() {

  if (userGuess == computerGuess) {
      alert("you won");
    }
  }