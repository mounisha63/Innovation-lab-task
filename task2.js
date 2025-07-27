// ----------------------------
// Task 2: Loop Control Practice
// ----------------------------

console.log("=== While Loop ===");

// Print numbers from 1 to 10 using while loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}



console.log("\n=== Do-While Loop ===");

// Simulate user input: keep asking until number > 10
let number = 7; // starting with a wrong value

do {
    console.log("Entered number is:", number);
    number++;  // increase number every time (as if user trying again)
} while (number <= 10);

console.log("Final accepted number:", number); // exits once > 10



console.log("\n=== For Loop ===");

// Find sum of first N natural numbers
let N = 5;
let sum = 0;

for (let j = 1; j <= N; j++) {
    sum += j;
}

console.log("Sum of first", N, "natural numbers is:", sum);



console.log("\n=== Nested For Loop ===");

// Print multiplication table from 1 to 5
for (let row = 1; row <= 5; row++) {
    let line = "";
    for (let col = 1; col <= 10; col++) {
        line += (row * col) + "\t"; // \t gives tab space
    }
    console.log(line);
}