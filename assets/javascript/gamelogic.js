
        //initilizing game variables
        var wins = 0;
        var loses = 0;
        var lives = 9;
        var userGuess = "";
        var answerKey = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        var answer = "";

        newAnswer();
        updateBoard();

        function newAnswer() {
            answer = Math.floor(Math.random() * answerKey.length);
        }

        function updateBoard() {

            document.getElementById("livesRemaining").innerHTML = "Lives: "+lives;
            document.getElementById("userScore").innerHTML = "Wins: "+wins;
            document.getElementById("userLoses").innerHTML= "Loses: "+loses;

            console.log (answerKey[answer]);
        }

        function takeGuess() {

            userGuess = document.getElementById("userGuess").value.toUpperCase().trim();

            console.log(userGuess);

            if (lives>0) {
                
                if (answerKey.includes(userGuess)) { //verifies and checks to see if users' guess is valid.

                    document.getElementById("gameWarning").style.visibility = "hidden";

                    if  (userGuess===answerKey[answer]){

                        wins++;
                        newAnswer();
                    } else {

                        loses++;
                        lives--;
                    } 
                } else {

                    document.getElementById("gameWarning").style.visibility = "visible";
                }
                
            updateBoard();
            }

        } 
