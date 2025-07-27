// ----------------------------
// Task 1: Conditional Statements Practice
// ----------------------------

console.log("=== Simple if statement ===");

// Check if a student passed
let marks = 65;

if (marks >= 50) {
    console.log("You passed the exam!"); // this will run since marks = 65
}



console.log("\n=== if-else statement ===");

// Check if a person can vote
let age = 17;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote."); // this will run
}



console.log("\n=== else-if ladder ===");

// Grade based on score
let score = 72;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else if (score >= 60) {
    console.log("Grade: C"); // this will run
} else {
    console.log("Grade: Fail");
}



console.log("\n=== switch statement ===");

// Print day name based on number
let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // this will run
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend or Invalid day");
}