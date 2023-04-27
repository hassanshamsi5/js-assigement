// 1
var num = parseInt(prompt("Enter a positive integer:"));
document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num) + "<br>");

// 2
var num = parseFloat(prompt("Enter a negative floating point number:"));
document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num) + "<br>");

// 3
var num = parseInt(prompt("Enter a number:"));
document.write("Absolute value: " + Math.abs(num));

// 4
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("Dice value: " + diceValue);

// 5
var coinValue = Math.floor(Math.random() * 2) + 1;
if (coinValue === 1) {
    document.write("Coin value: Heads");
} else {
    document.write("Coin value: Tails");
}

// 6
var num = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + num);

// 7
let weightStr = prompt("Please enter your weight: ");


let match = weightStr.match(/\d+(\.\d+)?/);

if (match) {
  let weight = parseFloat(match[0]);

  if (weightStr.includes("lbs") || weightStr.includes("pounds")) {
    weight = weight * 0.453592;
  }

  document.write(`Your weight is ${weight.toFixed(2)} kilograms.`);
} else {
  document.write("Invalid input. Please enter your weight in the format '50', '50kgs', '50.2kgs', or '50.2kilograms'.");
}
  

//8
let secretNum = Math.floor(Math.random() * 10) + 1;
let userNum = prompt("Guess the secret number between 1 and 10:");
userNum = parseInt(userNum);
if (userNum === secretNum) {
  document.write("Congratulations! You guessed the secret number.");
} else {
  document.write("Sorry, the secret number was " + secretNum + ". Try again.");
}
