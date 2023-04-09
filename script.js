//First program
let cityName = prompt("Please enter a city name:");

if (cityName === "Karachi") {
    console.log("Welcome to city of lights");
}

//second program
let gender = prompt("Please enter your gender:");

if (gender.toLowerCase() === "male") {
    console.log("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    console.log("Good Morning Ma'am.");
} else {
    console.log("Sorry, we don't recognize that gender.");
}


// third program
let color = prompt("Please enter the color of the traffic signal:");

if (color.toLowerCase() === "red") {
    console.log("Must Stop");
} else if (color.toLowerCase() === "yellow") {
    console.log("Ready to move");
} else if (color.toLowerCase() === "green") {
    console.log("Move now");
} else {
    console.log("Sorry, we don't recognize that color.");
}


//4th program
let fuel = parseFloat(prompt("Please enter the remaining fuel in your car (in litres):"));

if (fuel < 0.25) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("You have enough fuel to continue driving");
}

let subject1 = prompt("Enter marks obtained in Subject 1:");
let subject2 = prompt("Enter marks obtained in Subject 2:");
let subject3 = prompt("Enter marks obtained in Subject 3:");
let totalMarks = prompt("Enter total marks:");

// Calculate the total marks obtained
let obtainedMarks = parseFloat(subject1) + parseFloat(subject2) + parseFloat(subject3);

// Calculate the percentage
let percentage = (obtainedMarks / parseFloat(totalMarks)) * 100;

// Calculate the grade
let grade;
if (percentage >= 80) {
    grade = "A-one";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else if (percentage >= 40) {
    grade = "D";
} else {
    grade = "Fail";
}

// Display the results
console.log("Total marks: " + totalMarks);
console.log("Marks obtained: " + obtainedMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);

// Generate a random secret number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the number
let guess = parseInt(prompt("Guess a number between 1 and 10:"));

// Check if the guess is correct
if (guess === secretNumber) {
    alert("That's Great! Correct answer");
}
// Check if the guess is close enough to the correct answer
else if (guess === secretNumber - 1 || guess === secretNumber + 1) {
    alert("Close enough to the correct answer");
}
// the guess is incorrect
else {
    alert("Sorry, try again");
}

// user to enter a number
let number = parseInt(prompt("Enter a number:"));

// Check 
if (number % 3 === 0) {
    alert(number + " is divisible by 3");
}
else {
    alert(number + " is not divisible by 3");
}

// Prompt the user to enter a number
let num = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
if (num % 2 === 0) {
    alert(num + " is an even number");
}
else {
    alert(num + " is an odd number");
}

//change the program

let temperature = parseInt(prompt("Enter the temperature in Celsius:"));

if (temperature > 40) {
    alert("It is too hot outside.");
}
else if (temperature > 30) {
    alert("The weather today is Normal.");
}
else if (temperature > 20) {
    alert("Today's weather is cool.");
}
else if (temperature > 10) {
    alert("OMG! Today's weather is so cool.");
}
else {
    alert("Stay indoors, it's too cold outside.");
}

//change the program


// Prompt the user to enter the first number
let firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user to enter the second number
let secondNumber = parseFloat(prompt("Enter the second number:"));

// Prompt the user to enter the operation
let operation = prompt("Enter the operation (+, -, *, /, %):");

// Check the operation and compute the result
let result;
if (operation === "+") {
    result = firstNumber + secondNumber;
}
else if (operation === "-") {
    result = firstNumber - secondNumber;
}
else if (operation === "*") {
    result = firstNumber * secondNumber;
}
else if (operation === "/") {
    result = firstNumber / secondNumber;
}
else if (operation === "%") {
    result = firstNumber % secondNumber;
}
else {
    alert("Invalid operation!");
}

// Display the calculated result to the user
alert(`The result of ${firstNumber} ${operation} ${secondNumber} is ${result}.`);