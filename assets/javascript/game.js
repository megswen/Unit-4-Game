// Create an array that will hold the random numbers the computer will choose between 30-50
var randomNumber = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55];

// Create arrays that will hold random numbers for the crystals between 1-12
var crystalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Create a variable that will make the computer choose a random number from the randomNumbers array
var computerNumber = randomNumber[Math.floor(Math.random() * randomNumber.length)];
    // Display it in the randomnumber-text div
    $("#randomnumber-text").text(computerNumber);

// Create variables that will make each crystal choose a random number from their respective arrays
var firstCrystalNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
var secondCrystalNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
var thirdCrystalNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
var fourthCrystalNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];

// Create a variable that will hold the user's sum
var userSum = 0;
$("#usersum-text").text(userSum);

// Create cariables that hold wins and losses
var wins = 0;
var losses = 0;

//Reset game function
function reset() {
    userSum = 0;
    $('#usersum-text').text(userSum);
    computerNumber = randomNumber[Math.floor(Math.random() * randomNumber.length)];
    firstCrystalNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    secondCrystalNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    thirdCrystalNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
    fourthCrystalNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
}

$(document).ready(function(){

    // Create four functions (one for each crystal) that will run whenever the user clicks on a crystal and adds the numbers in the usersum-text div
    $('#crystal1').click(() => {
        userSum = userSum + firstCrystalNumber;
        $('#usersum-text').text(userSum);
    });

    $('#crystal2').click(() => {
        userSum = userSum + secondCrystalNumber;
        $('#usersum-text').text(userSum);
    });

    $('#crystal3').click(() => {
        userSum = userSum + thirdCrystalNumber;
        $('#usersum-text').text(userSum);
    });

    $('#crystal4').click(() => {
        userSum = userSum + fourthCrystalNumber;
        $('#usersum-text').text(userSum);
    });

    //If elwe statement that will increase wins if the user matches the random number and increases losses when the user goes above the random number
    if (userSum === computerNumber) {
        {wins++};
        alert("You won!");
        reset();
    } else if (userSum > computerNumber) {
        {losses++};
        alert("You lost!");
        reset();
    } 

    // Move wins and losses to html
    $("#wins-text").text("Your wins: " + wins);
    $("#losses-text").text("Your losses: " + losses);
})