var gameDiv = document.getElementById("game");
var guessesDiv = document.getElementById("guesses");
var lettersDiv = document.getElementById("letters_guessed");
var card = document.getElementById("card");
var wins = 0;
var winsDiv = document.getElementById("wins");
var newW = document.createElement("span");
newW.textContent = wins;
winsDiv.appendChild(newW);

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

function marioGame() {
    // Game Image
    var image = document.createElement("img");
    image.setAttribute("class", "card-img-top");
    image.setAttribute("src", "assets/images/mario.jpg");
    image.setAttribute("alt", "Game Image 1");
    card.insertBefore(image, card.firstChild);

    // Guesses Remaining
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

        if (letter === "M") {
            var newArr = hangMan.games[0].blanks.split(" ");

            newArr[0] = "M";
            var newGame = newArr.join(" ");
            hangMan.games[0].blanks = newGame;
            newP.textContent = newGame;

            lettersDiv.removeChild(newL);
        }

        if (letter === "A") {
            var newArr = hangMan.games[0].blanks.split(" ");

            newArr[1] = "A";
            var newGame = newArr.join(" ");
            hangMan.games[0].blanks = newGame;
            newP.textContent = newGame;

            lettersDiv.removeChild(newL);
        }

        if (letter === "R") {
            var newArr = hangMan.games[0].blanks.split(" ");

            newArr[2] = "R";
            var newGame = newArr.join(" ");
            hangMan.games[0].blanks = newGame;
            newP.textContent = newGame;

            lettersDiv.removeChild(newL);
        }

        if (letter === "I") {
            var newArr = hangMan.games[0].blanks.split(" ");

            newArr[3] = "I";
            var newGame = newArr.join(" ");
            hangMan.games[0].blanks = newGame;
            newP.textContent = newGame;
        }

        if (letter === "O") {
            var newArr = hangMan.games[0].blanks.split(" ");

            newArr[4] = "O";
            var newGame = newArr.join(" ");
            hangMan.games[0].blanks = newGame;
            newP.textContent = newGame;
        }

        if (arr.indexOf(letter) < 0) {
            guesses--;
            newG.textContent = guesses;

            if (guesses === 0) {
                alert ("SORRY... NO MORE GUESSES!");
                gameDiv.removeChild(newP);
                guessesDiv.removeChild(newG);
                lettersDiv.removeChild(newL);
                card.removeChild(image);
                luigiGame();
            }
        }

        if (keysPressed.indexOf(letter) > -1) {
            var newL = document.createElement("span");
            newL.textContent += letter;
            lettersDiv.appendChild(newL);
            for (var i = 0; i < keysPressed.length; i++) {
                for (var j = i + 1; j < keysPressed.length; j++) {
                    if (keysPressed[i] === keysPressed[j]) {
                        alert("NO DOUBLES");

                        keysPressed.pop();

                        guesses++;
                        newG.textContent = guesses;

                        console.log(newL);
                        lettersDiv.removeChild(newL);
                    }
                }
            }
            console.log(keysPressed);
        }

        if (newP.textContent === "M A R I O") {

            wins++;
            newW.textContent = wins;

            alert ("CONGRATS! YOU GUESSED CORRECTLY :)");
            gameDiv.removeChild(newP);
            guessesDiv.removeChild(newG);
            lettersDiv.removeChild(newL);
            card.removeChild(image);
            luigiGame();
        }
    } 
}
marioGame();
    
function luigiGame() {
    // Game Image
    var image = document.createElement("img");
    image.setAttribute("class", "card-img-top");
    image.setAttribute("src", "assets/images/luigi.jpg");
    image.setAttribute("alt", "Game Image 2");
    card.insertBefore(image, card.firstChild);

    // Guesses Remaining
    var guesses = 10;
    var newG = document.createElement("span");
    newG.textContent = guesses;
    guessesDiv.appendChild(newG);
    var newL = document.createElement("span");

    var arr = ["L", "U", "I", "G", "I"];

    var keysPressed = [];
    
    var newP = document.createElement("p");
    newP.textContent = hangMan.games[1].blanks;
    gameDiv.appendChild(newP);

    document.onkeyup = function(event) {
        var letter = event.key.toUpperCase();
        keysPressed.push(letter);

        if (letter === "L") {
            var newArr = hangMan.games[1].blanks.split(" ");

            newArr[0] = "L";
            var newGame = newArr.join(" ");
            hangMan.games[1].blanks = newGame;
            newP.textContent = newGame;
        }

        if (letter === "U") {
            var newArr = hangMan.games[1].blanks.split(" ");

            newArr[1] = "U";
            var newGame = newArr.join(" ");
            hangMan.games[1].blanks = newGame;
            newP.textContent = newGame;
        }

        if (letter === "I") {
            var newArr = hangMan.games[1].blanks.split(" ");

            newArr[2] = "I";
            newArr[4] = "I";
            var newGame = newArr.join(" ");
            hangMan.games[1].blanks = newGame;
            newP.textContent = newGame;
        }

        if (letter === "G") {
            var newArr = hangMan.games[1].blanks.split(" ");

            newArr[3] = "G";
            var newGame = newArr.join(" ");
            hangMan.games[1].blanks = newGame;
            newP.textContent = newGame;
        }

        if (arr.indexOf(letter) < 0) {
            guesses--;
            newG.textContent = guesses;

            newL.textContent += letter;
            lettersDiv.appendChild(newL);

            if (guesses === 0) {
                alert ("SORRY... NO MORE GUESSES!");
                gameDiv.removeChild(newP);
                guessesDiv.removeChild(newG);
                lettersDiv.removeChild(newL);
                card.removeChild(image);
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

        if (newP.textContent === "L U I G I") {
            newL.textContent += letter;
            lettersDiv.appendChild(newL);

            alert ("CONGRATS! YOU GUESSED CORRECTLY :)");
            gameDiv.removeChild(newP);
            guessesDiv.removeChild(newG);
            lettersDiv.removeChild(newL);
            card.removeChild(image);
            kirbyGame();
        }
    } 
}

function kirbyGame() {
    // Game Image
    var image = document.createElement("img");
    image.setAttribute("class", "card-img-top");
    image.setAttribute("src", "assets/images/kirby.jpg");
    image.setAttribute("alt", "Game Image 3");
    card.insertBefore(image, card.firstChild);

    var guesses = 10;
    var newG = document.createElement("span");
    newG.textContent = guesses;
    guessesDiv.appendChild(newG);
    var newL = document.createElement("span");

    var arr = ["K", "I", "R", "B", "Y"];

    var keysPressed = [];
    
    var newP = document.createElement("p");
    newP.textContent = hangMan.games[2].blanks;
    gameDiv.appendChild(newP);

    document.onkeyup = function(event) {
        var letter = event.key.toUpperCase();
        keysPressed.push(letter);

        if (letter === "K") {
            var newArr = hangMan.games[2].blanks.split(" ");

            newArr[0] = "K";
            var newGame = newArr.join(" ");
            hangMan.games[2].blanks = newGame;
            newP.textContent = newGame;
        }

        if (letter === "I") {
            var newArr = hangMan.games[2].blanks.split(" ");

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

            hangMan.games[2].blanks = newGame;

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
                alert ("SORRY... NO MORE GUESSES!");
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
            // gameDiv.removeChild(newP);
            // guessesDiv.removeChild(newG);
            // lettersDiv.removeChild(newL);
        }
    } 
}
