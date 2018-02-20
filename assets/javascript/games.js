
// Create an array of words for HANGMAN

var words = ['italy', 'usa', 'france', 'norway', 'germany', 'denmark', 'finland'];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var guesses = 10;
var numberofGuess = 0;
var computerGuess = "";
var dashes = "-";
var currentWord = "-";
var computerChoice = "";
var userGuessString = "";

function compareLetters(userInput, computerString) {

    var index = 0;

    while (index < computerString.length) {
        if (userInput !== computerString.charAt(index)) {
            console.log(computerString.charAt(index));
            index++;
        } else {
            return index;
        }
    }
    return -1;
};

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
};

function selectCountry() {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    computerGuess = "";
    computerChoice = words[Math.floor(Math.random() * words.length)];
    console.log("Computer Choice is " + computerChoice);
    console.log("The Length of the Computer Choice String is " + computerChoice.length);

    // Add Dashes to Display in CurrentWord field
    for (i = 0; i < computerChoice.length; i++) {
        computerGuess = replaceAt(computerGuess, i, "-");
    }
    
    document.getElementById('currentWord').innerHTML = computerGuess;
};

function resetVariables() {

    document.getElementById('userGuess').innerHTML = null;
    document.getElementById('currentWord').innerHTML = null;
    // computerGuess = null;
    selectCountry();
    guesses = 10;
    userGuessString = null;

}

resetVariables();
// When the user presses a key, it will run the following function...
document.onkeypress = function (event) {

    // Determines which key was pressed.
    var userGuessedLetter = event.key;
    guesses--;

    var letterLocation = compareLetters(userGuessedLetter, computerChoice);
    console.log("letterLocation  = " + letterLocation);

    if (letterLocation >= 0) {

        computerGuess = replaceAt(computerGuess, letterLocation, userGuessedLetter);

        console.log("userGuessedLetter =" + userGuessedLetter);

        console.log("ComputerGuess =" + computerGuess);
        document.getElementById('currentWord').innerHTML = computerGuess;
        //  guesses = 10;

    }

    document.getElementById('numberofGuess').innerHTML = guesses;

    if (userGuess != computerChoice) {
        userGuessString = document.getElementById('userGuess').innerHTML;
        userGuessString = userGuessString + userGuessedLetter;
        console.log("userGuessString = " + userGuessString);

        document.getElementById('userGuess').innerHTML = userGuessString + ",";
    }
    console.log("computerGuess = " + computerGuess);
    console.log("computerChoice = " + computerChoice);

    if (computerGuess  === computerChoice) {
        wins++;
        document.getElementById('userWins').innerHTML = wins;
        resetVariables();
    }

    if (guesses === 0) {
        resetVariables();
    }

}
