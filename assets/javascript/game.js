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
    newP.textContent = hangMan.games[1].blanks;
    gameDiv.appendChild(newP);

    document.onkeyup = function(event) {
        var letter = event.key.toUpperCase();
        keysPressed.push(letter);

        if (keysPressed.indexOf(letter) > -1) {
            for (var i = 0; i < keysPressed.length; i++) {
                for (var j = i + 1; j < keysPressed.length; j++) {
                    if (keysPressed[i] === keysPressed[j]) {
                        alert("You already guessed this letter!");
                        
                        keysPressed.pop();
        
                        console.log(newL);
                        lettersDiv.removeChild(newL.lastChild);
                    }
                }
            }
            console.log(keysPressed);
        }

        if (letter === "M") {
            var newArr = hangMan.games[0].blanks.split(" ");

            newArr[0] = "M";
            var newGame = newArr.join(" ");
            hangMan.games[0].blanks = newGame;
            newP.textContent = newGame;
        }

        if (letter === "A") {
            var newArr = hangMan.games[0].blanks.split(" ");

            newArr[1] = "A";
            var newGame = newArr.join(" ");
            hangMan.games[0].blanks = newGame;
            newP.textContent = newGame;
        }

        if (letter === "R") {
            var newArr = hangMan.games[0].blanks.split(" ");

            newArr[2] = "R";
            var newGame = newArr.join(" ");
            hangMan.games[0].blanks = newGame;
            newP.textContent = newGame;
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

            newL.textContent += letter;
            lettersDiv.appendChild(newL);

            if (guesses === 0) {
                alert ("SORRY... THE WORD WAS 'MARIO'!");
                gameDiv.removeChild(newP);
                guessesDiv.removeChild(newG);
                lettersDiv.removeChild(newL);
                card.removeChild(image);
                luigiGame();
            }
        }

        if (newP.textContent === "M A R I O") {
            newL.textContent += letter;
            lettersDiv.appendChild(newL);

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

        if (keysPressed.indexOf(letter) > -1) {
            for (var i = 0; i < keysPressed.length; i++) {
                for (var j = i + 1; j < keysPressed.length; j++) {
                    if (keysPressed[i] === keysPressed[j]) {
                        alert("You already guessed this letter!");
                        
                        keysPressed.pop();
        
                        console.log(newL);
                        lettersDiv.removeChild(newL.lastChild);
                    }
                }
            }
            console.log(keysPressed);
        }

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
                alert ("SORRY... THE WORD WAS 'LUIGI'!");
                gameDiv.removeChild(newP);
                guessesDiv.removeChild(newG);
                lettersDiv.removeChild(newL);
                card.removeChild(image);
                kirbyGame();
            }
        }

        if (newP.textContent === "L U I G I") {
            newL.textContent += letter;
            lettersDiv.appendChild(newL);

            wins++;
            newW.textContent = wins;

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

    // Guesses Remaining
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

        if (keysPressed.indexOf(letter) > -1) {
            for (var i = 0; i < keysPressed.length; i++) {
                for (var j = i + 1; j < keysPressed.length; j++) {
                    if (keysPressed[i] === keysPressed[j]) {
                        alert("You already guessed this letter!");
                        
                        keysPressed.pop();
        
                        console.log(newL);
                        lettersDiv.removeChild(newL.lastChild);
                    }
                }
            }
            console.log(keysPressed);
        }

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

            newArr[2] = "R";
            var newGame = newArr.join(" ");
            hangMan.games[2].blanks = newGame;
            newP.textContent = newGame;
        }

        if (letter === "B") {
            var newArr = hangMan.games[2].blanks.split(" ");

            newArr[3] = "B";
            var newGame = newArr.join(" ");
            hangMan.games[2].blanks = newGame;
            newP.textContent = newGame;
        }

        if (letter === "Y") {
            var newArr = hangMan.games[2].blanks.split(" ");

            newArr[4] = "Y";
            var newGame = newArr.join(" ");
            hangMan.games[2].blanks = newGame;
            newP.textContent = newGame;
        }

        if (arr.indexOf(letter) < 0) {
            guesses--;
            newG.textContent = guesses;

            newL.textContent += letter;
            lettersDiv.appendChild(newL);

            if (guesses === 0) {
                alert ("SORRY... THE WORD WAS 'KIRBY'!");
                lettersDiv.removeChild(newL);
            }
        }

        if (newP.textContent === "K I R B Y") {
            newL.textContent += letter;
            lettersDiv.appendChild(newL);

            wins++;
            newW.textContent = wins;

            alert ("CONGRATS! YOU GUESSED CORRECTLY :)");
            lettersDiv.removeChild(newL);
        }
    } 
}