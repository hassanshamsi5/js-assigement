// 1
let currentDate = new Date();
document.write("Current date and time: " + currentDate + "<br>");

// 2
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentDate1 = new Date();
let currentMonth = months[currentDate1.getMonth()];
alert("Current month is " + currentMonth);

// 3
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDate2 = new Date();
let currentDay = days[currentDate2.getDay()];
alert("First 3 letters of current day are " + currentDay);

// 4
let currentDate3 = new Date();
let currentDay1 = currentDate3.getDay();
if (currentDay1 === 0 || currentDay1 === 6) {
    alert("It's Fun day");
} else {
    alert("Sorry, it's not Fun day");
}

// 5 
let currentDate4 = new Date();
let currentMonthDay = currentDate4.getDate();
if (currentMonthDay < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

// 6
let minutesSinceEpoch = Date.now() / 1000 / 60;
document.write(minutesSinceEpoch);

// 7
let currentDate5 = new Date();
let currentHour = currentDate5.getHours();
if (currentHour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

// 8
let laterDate = new Date("December 31, 2020");
console.log(laterDate);

// 9
let ramadanStart = new Date("June 18, 2015");
let today = new Date();
let diffTime = Math.abs(today - ramadanStart);
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
alert(diffDays + " days have passed since 1st Ramadan 2015");

// 10
let referenceDate = new Date("Jan 01, 2015");
let referenceTime = referenceDate.getTime();
let currentTime = Date.now();
let diffSeconds = (currentTime - referenceTime) / 1000;
alert("Seconds elapsed between reference date and beginning of 2015: " + diffSeconds);

// 11

let date = new Date();
let hours = date.getHours();
date.setHours(hours + 1);
document.write(date);

// 12
let datE = new Date();
date.setFullYear(date.getFullYear() - 100);
alert(datE);

// 13
let age = parseInt(prompt("What's your age?"));
let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;
document.write("Your birth year is " + birthYear);

// 14
let customerName = prompt("Enter customer name:");
let currentMontH = prompt("Enter current month:");
let unitsConsumed = parseFloat(prompt("Enter units consumed:"));
let chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
let netAmountPayable = unitsConsumed * chargesPerUnit;
let latePaymentSurcharge = 0;
if (netAmountPayable > 0) {
    latePaymentSurcharge = netAmountPayable * 0.1;
}
let grossAmountPayable = netAmountPayable + latePaymentSurcharge;
netAmountPayable = netAmountPayable.toFixed(2);
latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2);
document.write("<h1>K-Electric Bill</h1>");
document.write("<p>Customer Name: " + customerName + "</p>");
document.write("<p>Month: " + currentMonth + "</p>");
document.write("<p>Units Consumed: " + unitsConsumed + "</p>");
document.write("<p>Charges per Unit: " + chargesPerUnit + "</p>");
document.write("<p>Net Amount Payable (within Due Date): " + netAmountPayable + "</p>");
document.write("<p>Late Payment Surcharge: " + latePaymentSurcharge + "</p>");
document.write("<p>Gross Amount Payable (after Due Date): " + grossAmountPayable + "</p>");

