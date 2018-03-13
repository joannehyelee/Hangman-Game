// START GAME WHEN USER PRESSES A KEY
// var clickedLetter;
// document.onkeyup = function(event) {
//    clickedLetter = event.key;
// }


var hangMan = {
    games: [
        {
            game: "MARIO",
            blanks: "_ _ _ _ _"
        },
        {
            game: "LUIGI",
            blanks: "_ _ _ _ _"
        },
        {
            game: "KIRBY",
            blanks: "_ _ _ _ _"
        }
    ]
}

var gameDiv = document.getElementById("game");
var guessesDiv = document.getElementById("guesses");
var lettersDiv = document.getElementById("letters_guessed"); 


function marioGame() {
    var guesses = 10;
    var newG = document.createElement("span");
    newG.textContent = guesses;
    guessesDiv.appendChild(newG);
    var newL = document.createElement("span");

    var arr = ["M", "A", "R", "I", "O"];

    var keysPressed = [];
    
    var newP = document.createElement("p");
    newP.textContent = hangMan.games[0].blanks;
    gameDiv.appendChild(newP);

    document.onkeyup = function(event) {
        var letter = event.key.toUpperCase();
        keysPressed.push(letter);
        // console.log(keysPressed);

        if (letter === "M") {
            var newArr = hangMan.games[0].blanks.split(" ");
            console.log(newArr);
            // returns ["_", "_", "_", "_", "_"];

            newArr[0] = "M";
            var newGame = newArr.join(" ");

            hangMan.games[0].blanks = newGame;

            newP.textContent = newGame;
        }

        if (letter === "A") {
            var newArr = hangMan.games[0].blanks.split(" ");
            console.log(newArr);
            // returns ["M", "_", "_", "_", "_"];

            newArr[1] = "A";
            var newGame = newArr.join(" ");

            hangMan.games[0].blanks = newGame;

            newP.textContent = newGame;
        }

        if (letter === "R") {
            var newArr = hangMan.games[0].blanks.split(" ");
            console.log(newArr);
            // returns ["M", "_", "_", "_", "_"];

            newArr[2] = "R";
            var newGame = newArr.join(" ");

            hangMan.games[0].blanks = newGame;

            newP.textContent = newGame;
        }

        if (letter === "I") {
            var newArr = hangMan.games[0].blanks.split(" ");
            console.log(newArr);
            // returns ["M", "_", "_", "_", "_"];

            newArr[3] = "I";
            var newGame = newArr.join(" ");

            hangMan.games[0].blanks = newGame;

            newP.textContent = newGame;
        }

        if (letter === "O") {
            var newArr = hangMan.games[0].blanks.split(" ");
            console.log(newArr);
            // returns ["M", "_", "_", "_", "_"];

            newArr[4] = "O";
            var newGame = newArr.join(" ");

            hangMan.games[0].blanks = newGame;

            newP.textContent = newGame;
            
        }

        if (arr.indexOf(letter) < 0) {
            guesses--;
            newG.textContent = guesses;
            console.log(guesses);

            // var newL = document.createElement("span");
            newL.textContent += letter;
            lettersDiv.appendChild(newL);

            if (guesses === 0) {
                alert ("SORRY... NO MORE GUESSES!");
                gameDiv.removeChild(newP);
                guessesDiv.removeChild(newG);
                lettersDiv.removeChild(newL);
                luigiGame();
            }
        }

        if (keysPressed.indexOf(letter) > -1) {
            for (var i = 0; i < keysPressed.length; i++) {
                if (keysPressed.includes(letter) > 2) {
                    alert("NO");
                }
            }
        }

        if (newP.textContent === "M A R I O") {
            alert ("CONGRATS! YOU GUESSED CORRECTLY :)");
            gameDiv.removeChild(newP);
            guessesDiv.removeChild(newG);
            lettersDiv.removeChild(newL);
            luigiGame();
        }
    } 
}
marioGame();
    

function luigiGame() {
    var arr = ["L", "U", "I", "G", "I"];
    var guesses = 10;
    var newG = document.createElement("span");
    newG.textContent = guesses;
    guessesDiv.appendChild(newG);
    var newL = document.createElement("span");

    var keysPressed = [];
    
    var newP = document.createElement("p");
    newP.textContent = hangMan.games[1].blanks;
    gameDiv.appendChild(newP);

    document.onkeyup = function(event) {
        var letter = event.key.toUpperCase();
        keysPressed.push(letter);
        // console.log(keysPressed);

        if (letter === "L") {
            var newArr = hangMan.games[1].blanks.split(" ");
            console.log(newArr);
            // returns ["_", "_", "_", "_", "_"];

            newArr[0] = "L";
            var newGame = newArr.join(" ");

            hangMan.games[1].blanks = newGame;

            newP.textContent = newGame;
        }

        if (letter === "U") {
            var newArr = hangMan.games[1].blanks.split(" ");
            console.log(newArr);
            // returns ["M", "_", "_", "_", "_"];

            newArr[1] = "U";
            var newGame = newArr.join(" ");

            hangMan.games[1].blanks = newGame;

            newP.textContent = newGame;
        }

        if (letter === "I") {
            var newArr = hangMan.games[1].blanks.split(" ");
            console.log(newArr);
            // returns ["M", "_", "_", "_", "_"];

            newArr[2] = "I";
            newArr[4] = "I";
            var newGame = newArr.join(" ");

            hangMan.games[1].blanks = newGame;

            newP.textContent = newGame;
        }

        if (letter === "G") {
            var newArr = hangMan.games[1].blanks.split(" ");
            console.log(newArr);
            // returns ["M", "_", "_", "_", "_"];

            newArr[3] = "G";
            var newGame = newArr.join(" ");

            hangMan.games[1].blanks = newGame;

            newP.textContent = newGame;
        }

        if (arr.indexOf(letter) < 0) {
            guesses--;
            newG.textContent = guesses;
            console.log(guesses);
                // var newL = document.createElement("span");
            newL.textContent += letter;
            lettersDiv.appendChild(newL);
                if (guesses === 0) {
                alert ("SORRY");
            }
        }

        if (keysPressed.indexOf(letter) > -1) {
            for (var i = 0; i < keysPressed.length; i++) {
                if (keysPressed.includes(letter) > 2) {
                    alert("NO");
                }
            }
        }
            if (newP.textContent === "L U I G I") {
            alert ("CONGRATS! YOU GUESSED CORRECTLY :)");
            gameDiv.removeChild(newP);
            guessesDiv.removeChild(newG);
            lettersDiv.removeChild(newL);
            kirbyGame();
        }
    }
}
kirbyGame();

function kirbyGame() {
    var arr = ["K", "I", "R", "B", "Y"];
    var guesses = 10;
    var newG = document.createElement("span");
    newG.textContent = guesses;
    guessesDiv.appendChild(newG);
    var newL = document.createElement("span");

    var keysPressed = [];
    
    var newP = document.createElement("p");
    newP.textContent = hangMan.games[2].blanks;
    gameDiv.appendChild(newP);

    document.onkeyup = function(event) {
        var letter = event.key.toUpperCase();
        keysPressed.push(letter);
        // console.log(keysPressed);

        if (letter === "K") {
            var newArr = hangMan.games[2].blanks.split(" ");
            console.log(newArr);
            // returns ["_", "_", "_", "_", "_"];

            newArr[0] = "K";
            var newGame = newArr.join(" ");

            hangMan.games[2].blanks = newGame;

            newP.textContent = newGame;
        }

        if (letter === "I") {
            var newArr = hangMan.games[2].blanks.split(" ");
            console.log(newArr);
            // returns ["M", "_", "_", "_", "_"];

            newArr[1] = "I";
            var newGame = newArr.join(" ");

            hangMan.games[2].blanks = newGame;

            newP.textContent = newGame;
        }

        if (letter === "R") {
            var newArr = hangMan.games[2].blanks.split(" ");
            console.log(newArr);
            // returns ["M", "_", "_", "_", "_"];

            newArr[2] = "R";
            var newGame = newArr.join(" ");

            hangMan.games[1].blanks = newGame;

            newP.textContent = newGame;
        }

        if (letter === "B") {
            var newArr = hangMan.games[2].blanks.split(" ");
            console.log(newArr);
            // returns ["M", "_", "_", "_", "_"];

            newArr[3] = "B";
            var newGame = newArr.join(" ");

            hangMan.games[2].blanks = newGame;

            newP.textContent = newGame;
        }

        if (letter === "Y") {
            var newArr = hangMan.games[2].blanks.split(" ");
            console.log(newArr);
            // returns ["M", "_", "_", "_", "_"];

            newArr[4] = "Y";
            var newGame = newArr.join(" ");

            hangMan.games[2].blanks = newGame;

            newP.textContent = newGame;
        }

        if (arr.indexOf(letter) < 0) {
            guesses--;
            newG.textContent = guesses;
            console.log(guesses);
                // var newL = document.createElement("span");
            newL.textContent += letter;
            lettersDiv.appendChild(newL);
                if (guesses === 0) {
                alert ("SORRY");
            }
        }

        if (keysPressed.indexOf(letter) > -1) {
            for (var i = 0; i < keysPressed.length; i++) {
                if (keysPressed.includes(letter) > 2) {
                    alert("NO");
                }
            }
        }
            if (newP.textContent === "K I R B Y") {
            alert ("CONGRATS! YOU GUESSED CORRECTLY :)");
            gameDiv.removeChild(newP);
            guessesDiv.removeChild(newG);
            lettersDiv.removeChild(newL);
            kirbyGame();
        }
    }
}
    




// Game 1: SUPER MARIO
// Game 2: DONKEY KONG
// Game 3: MEGA MAN

// * Press any key to get started --> show first game "Super Mario"   _ _ _ _ _  _ _ _ _ _

// * Create an array that includes all the characters
//     var letters = ["S", "U", "P", "E", "R", "M", "A", "I", "O"];

// * If user clicks a letter included in array, replace _ with letter, else decrease from "guesses remaining" & add letter to "letters already guessed"
//     var blanks = "_";
