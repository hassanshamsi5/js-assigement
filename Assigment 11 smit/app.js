// 1
let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
let fullName = firstName + " " + lastName;
alert("Hello " + fullName);

// 2
let phoneModel = prompt("Enter your favorite mobile phone model");
let length = phoneModel.length;
alert("The length of your favorite mobile phone model is: " + length);

// 3
let word = "Pakistani";
let index = word.indexOf("i");
alert("The index of letter 'n' in 'Pakistani' is: " + index);

// 4
let word1 = "Hello World";
let index1 = word.lastIndexOf("l");
alert("The last index of letter 'l' in 'Hello World' is: " + index);

// 5
let word2 = "Pakistani";
let character = word.charAt(3);
alert("The character at 3rd index in 'Pakistani' is: " + character);

// 6
let firstName1 = prompt("Enter your first name");
let lastName1 = prompt("Enter your last name");
let fullName1= firstName.concat(" ", lastName);
alert("Hello " + fullName);

// 7
let word3 = "Hyderabad";
let newWord = word.replace("Hyder", "Islam");
alert("The new word after replacing 'Hyder' with 'Islam' is: " + newWord);

8
let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMessage = message.replace(/and/g, "&");
alert("The new message after replacing 'and' with '&' is: " + newMessage);

// 9
let str = "472";
let num = parseInt(str);
alert("Value: " + num + "\nType: " + typeof num);

// 10
let userInput = prompt("Enter any text");
let upperCase = userInput.toUpperCase();
alert("Text in upper case: " + upperCase);

// 11

let userInput1 = prompt("Enter any text");
let titleCase = userInput.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
alert("Text in title case: " + titleCase);

// 12
let num1 = 35.36;
let str1 = num.toString().replace(".", "");
alert("Number without dot: " + str);

13
let username = prompt("Enter your username");
let regex = /[!@.,]/;
if (regex.test(username)) {
  alert("Enter a valid username");
}
else {
  alert("Username is valid");
}

// 14
let a = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput2 = prompt("Enter item to search in the array");
let found = false;
for (let i = 0; i < a.length; i++) {
  if (a[i].toLowerCase() === userInput.toLowerCase()) {
    found = true;
    break;
  }
}
if (found) {
  alert(userInput + " is available in the array");
}
else {
  alert(userInput + " is not available in the array");
}

// 15
let password = prompt("Enter a password");
let regex1 = /^[a-zA-Z][a-zA-Z0-9]{5,}$/;
if (regex.test(password)) {
  alert("Password is valid");
}
else {
  alert("Enter a valid password");
}

// 16
var university = "University of Karachi";
var arr = university.split(" ");
document.write(arr);

// 17
var input = prompt("Enter a string:");
var lastChar = input.charAt(input.length - 1);
document.write("The last character is: " + lastChar);

// 18
var str2 = "The quick brown fox jumps over the lazy dog";
var count = 0;
var words = str2.toLowerCase().split(" ");
for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}
document.write("The word 'the' occurs " + count + " times.");


var aa = "has the has and has";
a = a.replace(/has/g,"hassan");
console.log(a) 
