// Create an array that will hold the random numbers the computer will choose between 30-50
var randomNumber = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55];

// Create arrays that will hold random numbers for the crystals between 1-12
var crystalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Create a variable that will make the computer choose a random number from the randomNumbers array
var computerNumber;

// Create variables that will make each crystal choose a random number from their respective arrays
var firstCrystalNumber;
var secondCrystalNumber;
var thirdCrystalNumber;
var fourthCrystalNumber;

// Create a variable that will hold the user's sum
var userSum;

// Create variables that hold wins and losses
var wins = 0;
var losses = 0;

// Run the reset function to start on a clear game
reset();

//Reset game function
function reset() {
    userSum = 0;
    $('#usersum-text').text(userSum);
    computerNumber = randomNumber[Math.floor(Math.random() * randomNumber.length)];
    $("#randomnumber-text").text(computerNumber);
    firstCrystalNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    secondCrystalNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    thirdCrystalNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    fourthCrystalNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
}

function add(numberToAdd) {
    userSum = userSum + numberToAdd;
    $('#usersum-text').text(userSum);
    if (userSum === computerNumber) {
        wins++;
        alert("You won!");
        reset();
    } else if (userSum > computerNumber) {
        losses++;
        alert("You lost!");
        reset();
    } else {
    }
    displayWinLoss();
}

function displayWinLoss(){
    $("#wins-text").text("Your wins: " + wins);
    $("#losses-text").text("Your losses: " + losses);
}

$(document).ready(function(){

    // Create four functions (one for each crystal) that will run whenever the user clicks on a crystal and adds the numbers in the usersum-text div
    $('#crystal1').click(() => {
        add(firstCrystalNumber);
    });

    $('#crystal2').click(() => {
        add(secondCrystalNumber);
    });

    $('#crystal3').click(() => {
        add(thirdCrystalNumber);
    });

    $('#crystal4').click(() => {
        add(fourthCrystalNumber);
    });

    displayWinLoss();
})