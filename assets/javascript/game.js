// Create an array that will hold the random numbers the computer will choose between 30-50
var randomNumbers = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55];

// Create variables that will hold the number of wins and losses
var wins = 0;
var losses = 0;

// Create arrays that will hold random numbers for the crystals between 1-12
var crystalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Create a variable that will hold the user's sum
// var userSum = 0;

// Create a variable that will make the computer choose a random number from the randomNumbers array
var computerNumber = randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
    // Display it in the randomnumber-text div
    $("#randomnumber-text").text(computerNumber);

// Create variables that will make each crystal choose a random number from their respective arrays
var firstCrystalNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
var secondCrystalNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
var thirdCrystalNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];
var fourthCrystalNumber = crystalNumbers[Math.floor(Math.random() * crystalNumbers.length)];


// Create a function that will run whenever the user clicks on a crystal and put the number in the usersum-text div
$("#crystal1").click(function() {
$("#usersum-text").text(firstCrystalNumber);
});

$("#crystal2").click(function() {
$("#usersum-text").text(secondCrystalNumber);
});

$("#crystal3").click(function() {
$("#usersum-text").text(thirdCrystalNumber);
});

$("#crystal4").click(function() {
$("#usersum-text").text(fourthCrystalNumber);
});

// var userSum = 0;
// $("#crystal1 #crystal2 #crystal3 #crystal4").click(function(){
    // userSum = Number(userSum) + Number($(this).val());
    // $("#usersum-text").text(userSum);        
 // });
 // $("#usersum-text").text(userSum);

// Add the crystal numbers to the user sum div as many times as they are clicked

    // Make the computer choose a random number between 30-50

    // Assign each crystal a random number between 1-12

    // Add up the clicked crystal's numbers and put them in the user sum div

    // Create an if else statment that says if the user sum equals the computer's number, the user wins.

        //If the user sum is greater than the computer's number, the user loses.

        //If the user wins or loses, the wins or losses goes up one point, the computer picks a new random number, the crystals are assigned a new number, and the user sum resets to zero

        //If anything else, nothing happens and the game keeps going


