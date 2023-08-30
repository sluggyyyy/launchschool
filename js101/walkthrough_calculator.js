const readline = require('readline-sync');

console.log('Welcome to Calculator!\n');

// Ask the user for the first number.
let number1 = readline.question("What's the first number? ");
// console.log(number1);

// Ask the user for the second number.
let number2 = readline.question("What's the second number? ");
// console.log(`${number1} ${number2}`);

// Ask the user for an operation to perform 
let operation = readline.question("\nWhat operation would you like to perform?\n\n  1) Add 2) Subtract 3) Multiply 4) Divide: ");

// Perform the operation on the two numbers.
// Print the result to the terminal.
let output;
if (operation === '1') {
    output = Number(number1) + Number(number2);
    console.log(`The result is: ${output}`);
} else if (operation === '2') {
    output = Number(number1) - Number(number2);
    console.log(`The result is: ${output}`);
} else if (operation === '3') {
    output = Number(number1) * Number(number2);
    console.log(`The result is: ${output}`);
} else if (operation === '4') {
    output = Number(number1) / Number(number2);
    console.log(`The result is: ${output}`);
} else {
    console.log('\n Please try again and enter a valid operator selection...')
}