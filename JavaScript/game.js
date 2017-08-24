var letter = [
    "a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var target = letter[Math.floor(Math.random() * letter.length)];

var guessesLeft = 9;

var wins = 0;

var losses = 0;

var input = document.getElementById("guesses");

/*function target(holder) {
    letter[Math.floor(Math.random() * letter.length)];
};*/

/*function getNewTarget(holder) {
    target = letter[Math.floor(Math.random() * letter.length)];
    return target;
};*/

//console.log(getNewTarget);

document.onkeyup = function(attempt) {
    input.textContent += attempt.key + ", ";
    turn = attempt.key;
    console.log(turn);
        if (turn == target){
            wins++;
            guessesLeft = 9;
            document.getElementById("wins").textContent = "Wins " + wins;
            alert("Winner, Winner, Chicken Dinner!");
            input.textContent = "Your Guesses: " + "";
            target = letter[Math.floor(Math.random() * letter.length)];
        } else if (turn != target && guessesLeft > 1){
            guessesLeft--;
            document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
        } else if (turn != target && guessesLeft == 1) {
            losses++;
            document.getElementById("losses").textContent = "Losses " + losses;
            guessesLeft = 9;
            input.textContent = "Your Guesses: " + "";
            alert("You lose!");
            target = letter[Math.floor(Math.random() * letter.length)];
        }  
    };
