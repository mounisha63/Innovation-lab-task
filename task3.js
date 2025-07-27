// Task 3: Break and Continue Example

for (let i = 10; i <= 50; i++) {
    let isPrime = true;

    // Prime number check
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("First prime number found:", i);
        break;  // Stop loop after finding first prime
    }
}

console.log("Odd numbers between 1 and 20:");

// Odd numbers using continue
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;  // Skip even numbers
    }
    console.log(i);
}