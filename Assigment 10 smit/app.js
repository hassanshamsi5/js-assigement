// 1
let arr = [];

// 2
let arr1 = [[], [], []];

3
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
// 4
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

// 5
let tableNumber = prompt("Enter a number:");
let tableLength = prompt("Enter table length:");
for (let i = 1; i <= tableLength; i++) {
  console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

// 6
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

7
// Counting
for (let i = 1; i <= 15; i++) {
    console.log(i);
  }
  
  // Reverse counting
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
  
  // Even
  for (let i = 0; i <= 20; i += 2) {
    console.log(i);
  }
  
  // Odd
  for (let i = 1; i <= 20; i += 2) {
    console.log(i);
  }
  
  // Series
  for (let i = 2; i <= 20; i += 2) {
    console.log(`${i}k`);
  }

// 8
let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter item to search:");
let found = false;
for (let i = 0; i < items.length; i++) {
  if (items[i] === userInput) {
    found = true;
    break;
  }
}
if (found) {
  console.log(`"${userInput}" found in the list.`);
} else {
  console.log(`"${userInput}" not found in the list.`);
}

// 9

let A = [24, 53, 78, 91, 12];
let smallest = A[0];

for(let i=1; i<A.length; i++){
   if(A[i] < smallest){
      smallest = A[i];
   }
}

console.log("The smallest number in the array is " + smallest);

10
for(let i=1; i<=20; i++){
    console.log(i*5);
 }
 