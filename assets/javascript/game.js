// console.log ('log');

// var random = Math.floor((Math.random() * 10) + 1);

// console.log(random);
// var user= prompt('guess a number from 1 - 10');

// if (random == user)  {console.log("you win")

    
// } else {console.log("you lose")
    
// }
//Created an array called Letters and a variable i to help with for loop starting number
var userGuess =["a", "b", "c","d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var computerGuess =["a", "b", "c","d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var i;
for (i = 0; i <  userGuess.length; i++);
document.onkeyup = function(userGuess) {
var userGuess = event.key;

    console.log(userGuess[i]);
  };

  

  var computerGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];
console.log(computerGuess)
  
  if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") ||
  (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m" ) || (userGuess === "n") ||
  (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") ||
  (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")); 

function userGuess() {
 

}


