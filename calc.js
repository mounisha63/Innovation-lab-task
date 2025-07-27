while (true) {
    // Showing the calculator menu to the user
    let choice = prompt(
        "Calculator Menu:\n" +
        "1. Add\n" +
        "2. Subtract\n" +
        "3. Multiply\n" +
        "4. Divide\n" +
        "5. Exit\n" +
        "Enter your choice (1 to 5):"
    );

    // Convert the input to a number
    choice = Number(choice);

    // If the choice is invalid, go back to menu
    if (choice < 1 || choice > 5 || isNaN(choice)) {
        alert("Invalid option! Please enter a number between 1 and 5.");
        continue;
    }

    // If user selected Exit, stop the loop
    if (choice === 5) {
        alert("You chose to exit. Goodbye!");
        break;
    }

    // Asking user to enter two numbers
    let num1 = Number(prompt("Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input! Please enter valid numbers.");
        continue;
    }

    // Result variable
    let result;

    // Perform calculation based on user choice
    switch (choice) {
        case 1:
            result = num1 + num2;
            alert(`Result: ${num1} + ${num2} = ${result}`);
            break;

        case 2:
            result = num1 - num2;
            alert(`Result: ${num1} - ${num2} = ${result}`);
            break;

        case 3:
            result = num1 * num2;
            alert(`Result: ${num1} * ${num2} = ${result}`);
            break;

        case 4:
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
            } else {
                result = num1 / num2;
                alert(`Result: ${num1} / ${num2} = ${result}`);
            }
            break;
    }
}