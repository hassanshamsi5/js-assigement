// 1
function displayCurrentDateTime() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  document.write(dateTimeString);
}
displayCurrentDateTime();

// 2
function greetUser(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  console.log(`Hello, ${fullName}!`);
}

greetUser("John", "Doe");

// // 3
function addNumbers(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
const result = addNumbers(5, 10);
console.log(result);

// // 4
function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operator';
  }
  document.write('<br>' + result);
}

calculator(5, 8, '*')

// // 5
function squareNumber(num) {
  const result = num ** 2;
  return result;
}
const squared = squareNumber(5);
console.log(squared);


// // 6
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
const fact = factorial(5);
console.log(fact);

// // 7
function displayCount(startNum, endNum) {
  let count = '';
  for (let i = startNum; i <= endNum; i++) {
    count += i + ', ';
  }
  count = count.slice(0, -2);
  document.write('<br>' + count);
}
displayCount(1, 10);


// // 8 
function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(num) {
    return num * num;
  }
  const baseSquared = calculateSquare(base);
  const perpendicularSquared = calculateSquare(perpendicular);
  const hypotenuse = Math.sqrt(baseSquared + perpendicularSquared);
  return hypotenuse;
}
const hyp = calculateHypotenuse(3, 4);
console.log(hyp);


// 9 
function calculateAreaVal(width, height) {
  return width * height;
}
const areaVal = calculateAreaVal(5, 10);
console.log(areaVal);
function calculateAreaVar(widthVar, heightVar) {
  return widthVar * heightVar;
}
const width = 5;
const height = 10;
const areaVar = calculateAreaVar(width, height);
console.log(areaVar);


// 10
function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Example usage
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hellocar")); // false

// 11
function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Example usage
console.log(capitalizeFirstLetter("the quick brown fox")); // "The Quick Brown Fox"

// 12
function findLongestWord(str) {
  const words = str.split(" ");
  let maxLength = 0;
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord("Web Development Tutorial"));

// 13
function countOccurrences(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}
const str = 'JSResourceS.com';
const letter = 'o';
const occurrences = countOccurrences(str, letter);
console.log(`The letter '${letter}' occurs ${occurrences} times in the string '${str}'`);

// 14
function calcCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  console.log(`The circumference is ${circumference}`);
}
function calcArea(radius) {
  const area = Math.PI * Math.pow(radius, 2);
  console.log(`The area is ${area}`);
}
const radius = 5;
calcCircumference(radius);
calcArea(radius);

