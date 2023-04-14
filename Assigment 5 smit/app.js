//1
document.write("Sum of 3 and 5 is 8 <br>");

//2
var numOne=12,
 numTwo=10, 
 res;
  res = numOne + numTwo;
  document.write("Add = " + res + "<br/>");
  res = numOne - numTwo;
  document.write("Subtract = " + res + "<br/>");
  res = numOne * numTwo;
  document.write("Multiply = " + res + "<br/>");
  res = numOne/numTwo;
  document.write("Divide = " + res + "<br/>");

//3

let num;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num += 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
let remainder = num % 3;
document.write("The remainder is: " + remainder + "<br>");

//4

let ticketPrice = 600;
let totalCost = ticketPrice * 5;
document.write("The cost of buying 5 tickets is: " + totalCost + " PKR.");

//5

var number = +prompt('Enter an integer: ');
for(let i = 1; i <= 10; i++) {
    var result = i * number;
    document.write(`${number} * ${i} = ${result} <br>`);}

//6

var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is " + fahrenheit + "°F");

var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5/9;
console.log(fahrenheit2 + "°F is " + celsius2 + "°C");

//7

var item1Price = 10.99;
var item2Price = 5.99;
var item1Qty = 2;
var item2Qty = 3;
var shippingCharges = 2.99;
var subtotal = (item1Price * item1Qty) + (item2Price * item2Qty);
var shippingCost = shippingCharges;
var totalCost1 = subtotal + shippingCost;
document.write("<h2>Order Receipt</h2>");
document.write("<p>Item 1 price: $" + item1Price.toFixed(2) + "</p>");
document.write("<p>Item 1 quantity: " + item1Qty + "</p>");
document.write("<p>Item 2 price: $" + item2Price.toFixed(2) + "</p>");
document.write("<p>Item 2 quantity: " + item2Qty + "</p>");
document.write("<p>Subtotal: $" + subtotal.toFixed(2) + "</p>");
document.write("<p>Shipping cost: $" + shippingCost.toFixed(2) + "</p>");
document.write("<h3>Total cost: $" + totalCost1.toFixed(2) + "</h3>");

//8

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h1>Marks Sheet</h1>");
document.write("<p>Total marks: " + totalMarks + "</p>");
document.write("<p>Marks obtained: " + marksObtained + "</p>");
document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");

//9


var usd = 10;
var sar = 25;
var pkr = (usd * 280.536) + (sar * 74.67);
document.write("<h2>Currency Converter</h2>");
document.write("<p>Amount of US dollars: " + usd + "</p>");
document.write("<p>Amount of Saudi Riyals: " + sar + "</p>");
document.write("<p>Total amount in Pakistani Rupees: " + pkr.toFixed(2) + "</p>");



//10

var number = 7;
var result = (((number + 5) * 10) / 2);
console.log(result);

//11

var currentYear = 2023;
var birthYear = 1995;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("<h2>Age Calculator</h2>");
document.write("<p>Current year: " + currentYear + "</p>");
document.write("<p>Birth year: " + birthYear + "</p>");
document.write("<p>They are either " + age2 + " or " + age1 + " years old.</p>");

//12

let radius = 20;
let circumference = 2 * 3.142 * radius;
console.log("The circumference is " + circumference);
let area = 3.142 * radius * radius;
console.log("The area is " + area);

//13
var favoriteSnack = "chocolate chip cookies";
var currentAge = 15;
var maximumAge = 65;
var estimatedAmountPerDay = 3;
var totalSnacks = (maximumAge - currentAge) * 365 * estimatedAmountPerDay;
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");

