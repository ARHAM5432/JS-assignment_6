// JS assignment 6 🐌

var items = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(items[0][0]);
console.log(items[0][1]);
console.log(items[1][0]);
console.log(items[1][1]);
console.log(items);

// Question 1
var dimensions = [
    [], // Empty subarray
    [], // Empty subarray
    []  // Empty subarray
];
console.log(dimensions); // Logs the empty dimensionssional array

var multi = [[], [], [], []]; // Four empty subarrays
console.log(multi); // Logs the dimensionssional array

// Question 2
var dimensions = [
    [0], [1], [2], [3] // Arrays with single numbers
];
document.write(dimensions[0][0]); // Displays 0
document.write(dimensions[1][0]); // Displays 1
document.write(dimensions[2][0]); // Displays 2
document.write(dimensions[3][0] + "<br>"); // Displays 3 and adds a line break

// Repeating the process in different orders
document.write(dimensions[1][0]);
document.write(dimensions[0][0]);
document.write(dimensions[1][0]);
document.write(dimensions[2][0] + "<br>");

document.write(dimensions[2][0]);
document.write(dimensions[1][0]);
document.write(dimensions[0][0]);
document.write(dimensions[1][0] + "<br>");

// Question 3
for (var i = 0; i <= 10; i++) {
    document.write(i + "<br>"); // Displays numbers from 0 to 10 with line breaks
}

// Question 4 - Multiplication Table
var table = +prompt("Enter a number to show its multiplication table");
for (var i = 1; i <= 10; i++) {
    document.write(table + " X " + i + " = " + table * i + "<br>");
}

// Question 4 (extended)
var table = +prompt("Enter a number to show its multiplication table");
var total = +prompt("Enter length of multiplication table");
for (var i = 1; i <= total; i++) {
    document.write(table + " X " + i + " = " + table * i + "<br>");
}

// Question 5 - Fruits Array
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i <= fruits.length - 1; i++) {
    document.write(fruits[i] + "<br>");
}

for (var i = 0; i <= fruits.length - 1; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

// Question 6 - Counting Arrays
var counting = [];
for (var i = 1; i <= 15; i++) {
    counting.push(i);
}
document.write("<h1>Counting:</h1> " + counting.join(", ") + "<br>");

var reverseCounting = [];
for (var i = 1; i <= 10; i++) {
    reverseCounting.push(i);
}
document.write("<h1>Reverse: </h1> " + reverseCounting.reverse().join(", ") + "<br>");

// Even and Odd Numbers
var even = [], odd = [];
for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        even.push(i);
    } else {
        odd.push(i);
    }
}
document.write("<h1>Even:</h1> " + even.join(", ") + "<br>");
document.write("<h1>Odd:</h1> " + odd.join(", ") + "<br>");

var series = [];
for (var i = 2; i <= 20; i += 2) {
    series.push(i + "k");
}
document.write("<h1>Series:</h1> " + series.join(", ") + "<br>");

// Question 7 - Bakery Items
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What would you like to order?");
var found = false;

for (var i = 0; i < bakeryItems.length; i++) {
    if (bakeryItems[i] === userInput) {
        found = true;
        break;
    }
}

if (found) {
    document.write(userInput + " is <b>available</b> at index " + i + " in our bakery.");
} else {
    document.write("We are sorry. " + userInput + " is <b>not available</b> in our bakery.");
}

// Question 8 - Largest Number
var A = [24, 53, 78, 91, 12];
var largestNumber = A[0];
document.write("Array items: " + A.join(", "));
for (var i = 0; i < A.length; i++) {
    if (A[i] > largestNumber) {
        largestNumber = A[i];
    }
}
document.write("<br>The Largest Number is: " + largestNumber);

// Question 9 - Smallest Number
var smallestNumber = A[0];
document.write("Array items: " + A.join(", "));
for (var i = 0; i < A.length; i++) {
    if (A[i] < smallestNumber) {
        smallestNumber = A[i];
    }
}
document.write("<br>The Smallest Number is: " + smallestNumber);

// Question 10 - Multiples of 5
var number = 5;
for (let i = 1; i <= 100; i++) {
    document.write(number * i);
    if (i < 100) {
        document.write(", ");
    }
}
