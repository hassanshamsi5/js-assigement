// 1
let students = [];

// 2
let students1 = new Array();

// 3
let stringsArray = ["hello", "world", "JavaScript"];

// 4
let numbersArray = [1, 2, 3, 4, 5];

// 5
let booleanArray = [true, false, true, true];

// 6
let mixedArray = ["hello", 1, true, undefined];

// 7
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// 8
for (let i = 0; i < qualifications.length; i++) {
    document.write(qualifications[i]);
    document.write("<br>")
  }

// 9
let students3 = ["John", "Jane", "Bob"];
let scores = [320, 420, 480];

for (let i = 0; i < students3.length; i++) {
  let percentage = (scores[i] / 500) * 100;
  document.write(`${students3[i]} scored ${scores[i]} marks. Percentage: ${percentage}%`);
  document.write("<br>")
}

// 10
let colors = ["red", "green", "blue"];
document.write(colors);

// 11
let colorToAdd = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAdd);
document.write(colors);

// 12
let colorToAdd1 = prompt("Enter a color to add to the end:");
colors.push(colorToAdd);
document.write(colors);

// 13
colors.unshift("orange", "yellow");
document.write(colors);

// 14
let fifoArray = [];
fifoArray.push('A');
fifoArray.push('B');
fifoArray.push('C');
for (let i = 0; i < fifoArray.length; i++) {
  document.write(fifoArray[i]);
}

let lifoArray = [];
lifoArray.push('X');
lifoArray.push('Y');
lifoArray.push('Z');
while (lifoArray.length > 0) {
  document.write(lifoArray.pop());
}

// 15
let manufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write('<select>');
for (let i = 0; i < manufacturers.length; i++) {
  document.write(`<option value="${manufacturers[i]}">${manufacturers[i]}</option>`);
}
document.write('</select>'); 


