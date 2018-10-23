
        //initilizing game variables
        var wins = 0;
        var loses = 0;
        var lives = 9;
        var userGuess = "";
        var answerKey = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        var wrongGuess= [];
        var answer = "";

        newAnswer();
        updateBoard();

        document.onKeydown = function(event) {
            console.log(event.key);
            takeGuess(event.key);
        }

        function newAnswer() { //gets new random number for the key, clears user input, clears guess histoy.

            answer = Math.floor(Math.random() * answerKey.length);
            console.log (answerKey[answer]);
            userGuess = document.getElementById("userGuess").value
            wrongGuess = [];
        }

        function updateBoard() { //changes score, lives, and loses

            document.getElementById("livesRemaining").innerHTML = "Lives: "+lives;
            document.getElementById("userScore").innerHTML = "Wins: "+wins;
            document.getElementById("userLoses").innerHTML= "Loses: "+loses;

        }

        function takeGuess(guess) {

            console.log("user guessed: " + guess);

            if (lives < 0) {
                console.log("lives less than 0")
                
            } else if (! answerKey.includes(guess)) { //verifies and checks to see if users' guess is valid.

                console.log("guess provided isnt a possible answer");

                document.getElementById("gameWarning").style.visibility = "visible";

            } else if (wrongGuess.includes(guess)) { //checks to see if user already submitted that letter this round

                console.log("you already guessed that letter....");

            } else if (guess===answerKey[answer]) { //checks to see if guess is incorrect

                console.log("you won");

                wins++;
                newAnswer();

                //wrongGuess.push(userGuess); //adds incorrect guess to array of guesses this round

            } else {

                console.log("you lost");

                loses++;
                lives--;

                wrongGuess.push(userGuess); //adds incorrect guess to array of guesses this round
            }
                
            updateBoard();
            }