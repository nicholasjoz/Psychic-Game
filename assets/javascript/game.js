
var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



//initialize all variables to zero. set guessedLetters as empty array, letterToGuess undefined
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = undefined;



//functions for the "new" variables after game begins and user pushes keys
//this is where connect to HTML to fill in visual data for user



var newGuessesLeft = function() {
   document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
};



//computer chooses random letter, logs it
var newLetterToGuess = function() {
   letterToGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
   console.log(letterToGuess);
};



//store keys pressed by user
var newGuessesSoFar = function() {
   document.querySelector('#userGuess').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};



//reset with this function after win/loss
var reset = function() {
   guessesLeft = 9;
   guessedLetters = [];


//generate computer's guess
   newLetterToGuess();

   newGuessesLeft();
   newGuessesSoFar();
}



//onkeyup used as event for your guess, reduce guessesLeft by 1.
document.onkeyup = function(event) {
   guessesLeft--;



   console.log(event.key);
   console.log(guessedLetters);



   //make user guess lower case so it will not be case sensitive. Literally the most frustrating debugging i had to do here
   var userGuess = String.fromCharCode(event.keyCode).toLowerCase();



   //pushing the guessed letter to userGuess, update relevant vars with new values
   guessedLetters.push(userGuess);
   newGuessesLeft();
   newGuessesSoFar();



   //when user still has guesses remaining and get letter, they win. if they have no guesses left, they lose.
   if (guessesLeft > 0) {
       if (userGuess == letterToGuess) {
           wins++;
           document.querySelector('#win').innerHTML = "Wins: " + wins;
           alert("Wow! You are psychic! Try another!");
           reset();
       }
   } else if (guessesLeft == 0) {
       losses++;
       document.querySelector('#loss').innerHTML = "Losses: " + losses;
       alert("Oh hamburgers! You are not psychic and Butters is grounded. Try again!");



       reset();
   }
};
