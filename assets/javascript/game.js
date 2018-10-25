

var answerKey = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", " "];
var lives = 9;
var lettersCorrect = 0;
var lettersTried = [];
var currentWord = [];
var revealed = [];
var words = [
  "LEGEND OF ZELDA",
  "SUPER MARIO",
  "HALO",
  "GOD OF WAR",
  "SPIDERMAN",
  "DUCK HUNT",
  "NEVER WINTER NIGHTS",
  "PATHFINDER",
  "DUNGEONS AND DRAGONS",
  "INFAMOUS",
  "BANJO KAZOOIE",
  "CRASH BANDICOOT",
  "SPYRO",
  "KILLZONE",
  "TONY HAWK PRO SKATER",
  "CALL OF DUTY",
  "DESTINY",
  "THE LAST OF US",
  "UNCHARTED",
  "HEROES OF THE STORM",
  "HARVEST MOON",
  "POKEMON",
  "KINGDOM HEARTS",
  "WORLD OF WARCRAFT",
  "STARCRAFT",
  "TOMB RAIDER",
  "POKER",
  "UNO",
  "DEUS EX",
  "BATTLEFRONT",
  "STARFOX",
  "FIRE EMBLEM",
  "SUPER SMASH BROTHERS",
  "FINAL FANTASY",
  "DRAGON QUEST",
  "HANGMAN",
  "DONKEY KONG"
];

getWord();
letterChecker(" ");
updateBoard();

//waits for user to press a key before starting.
document.onkeydown = function(event) {

  userGuess = event.key.toUpperCase();
  console.log(userGuess);
  document.getElementById("rulesReminder").textContent = "";



  //Start of Game rule checks
  //only becomes an option if a win or loss condition was deteced last turn.
  if(lives <= 0){

    //enter was chosen as the key to play again, so checks to see if user hit enter to play again.
    if (userGuess == "ENTER"){

      resetBoard();
      getWord();
      letterChecker(" ");
    }
  }
  //Checking to see if User's guess is a letter
  else if (!answerKey.includes(userGuess)){

    document.getElementById("rulesReminder").textContent = "Please enter a letter..."
  } 
  //Checking to see if User's guess has already been played
  else if (lettersTried.includes(userGuess)){

    document.getElementById("rulesReminder").textContent = "That is already on the board..."
  }
  //checking to see if word contains user's guess
  else if (currentWord.includes(userGuess)){

    letterChecker(userGuess);
    lettersTried.push(userGuess);
  }
  //if users answer was wrong
  else{

    lives--;
    lettersTried.push(userGuess);
  }

  //update the board with correct info and then check for the win conditions
  updateBoard();
  isGameOver();
}

//Function to go through the array and reveal the letters for the user.
function letterChecker(userGuess){

  //counter to go through the current word one step at a time for comparing.
  for(var i=0; i<currentWord.length; i++){

    //compares current element to user guess
    if(currentWord[i]===userGuess){

      //changes the identified index to user guess.
      revealed[i]=userGuess;
      lettersCorrect++;
    }
  }
}

//generates a random number, using that number it looks through array for the game at that index.
//generates the array revealed which the characters that have been correctly guessed are revealed.
function getWord (){

  var key = Math.floor(Math.random() * words.length);
  currentWord = words[key].split("");

  currentWord.forEach(function(letter){
    revealed.push("-");
  });
}

//updates all the elements in html to show current values
function updateBoard(){
  document.getElementById("htmlLives").textContent = lives;
  document.getElementById("htmlLettersGuessed").textContent = lettersTried;
  document.getElementById("wordToGuess").textContent = "";
  for( var i = 0; i<revealed.length; i++){
    document.getElementById("wordToGuess").textContent += revealed[i];
  }


}

//reverts all variables back to their original state so that the game can be start fresh again.
function resetBoard(){
  lives = 9;
  lettersCorrect = 0;
  lettersTried = [];
  currentWord = [];
  revealed = [];
}

//function called to check for both the win and lose conditions exist.
function isGameOver(){

    //checking to see if letters correct is the same as the current words length, if the two are equal there should be no more letters to guess.
  if (lettersCorrect == currentWord.length){
    document.getElementById("rulesReminder").textContent = "You win! press 'ENTER' to play again..."
    console.log("you Win");
    lives = 0;
  }

  //checking to see if user has any lives remaining, if not updates screen to let user know they lost.
  else if (lives == 0){
    document.getElementById("rulesReminder").textContent = "You lost! press 'ENTER' to play again..."
    console.log("Game Over");

  }
}
