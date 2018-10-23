var wins = 0;
var loses = 0;
var lives = 9;
var answerKey = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var wrongGuess= [];
var answer = "0";

var ruleReminder = document.getElementById("gameWarning");


//code that runs on load
updateBoard();
newAnswer();

//waits for user to input a guess
document.onkeydown = function(event) {

  ruleReminder.style.visibility = "hidden";
  var userGuess = event.key.toUpperCase();
  takeGuess(userGuess);
}


//logic and evaluations for comparing users guess.
function takeGuess(guess) {

  if (lives <= 0 ) { //user doesnt have any lives

    ruleReminder.textContent = "You are out of lives...";
    ruleReminder.style.visibility = "visible";
  }
  
  else if (!answerKey.includes(guess) ){  //guess isnt in key)

    ruleReminder.textContent = "That wasn't a letter...";
    ruleReminder.style.visibility = "visible";
  }
  
  else if (wrongGuess.includes(guess)) { //guess has already been made

    ruleReminder.textContent = "You already guessed that...";
    ruleReminder.style.visibility = "visible";
  }

  else if (guess===answerKey[answer]) {//guess is correct

    wins++;
    newAnswer();
  }
  
  else{//guess is incorrect

    loses++;
    lives--;

    wrongGuess.push(guess);

  }

  updateBoard();
  if (lives <= 0 ) { //user doesnt have any lives

    ruleReminder.textContent = "You are out of lives...";
    ruleReminder.style.visibility = "visible";
  }
}

  function updateBoard() { //changes score, lives, and loses

    document.getElementById("livesRemaining").textContent = lives;
    document.getElementById("userScore").textContent = wins;
    document.getElementById("userLoses").textContent = loses;
    document.getElementById("guessHistory").textContent= wrongGuess;

}

function newAnswer() { //gets new random number for the key, clears user input, clears guess histoy.

  answer = Math.floor(Math.random() * answerKey.length); //generates a new number for the computers guess.

  wrongGuess = []; //blanks wrongGuess array
}