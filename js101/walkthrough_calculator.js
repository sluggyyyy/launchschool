const readline = require('readline-sync');

// Standardizer for prompts asking user for input
let prompt = (message) => {
  console.log(`=> ${message}`);
};

// Function for handling invalid inputs
let invalidNumber = (number) => {
  return number.trimStart() === '' || Number.isNaN(Number(number));
};

console.log('Welcome to Calculator!\n');

// Ask the user for the first number with error handling.
prompt("What's the first number? ");
let number1 = readline.question();
// console.log(number1);

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number. Please enter a new value:");
  number1 = readline.question();
}

// Ask the user for the second number with error handling.
prompt("What's the second number? ");
let number2 = readline.question();
// console.log(`${number1} ${number2}`);
while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number. Please enter a new value:");
  number2 = readline.question();
}

// Ask the user for an operation to perform with error handling.
prompt("What operation would you like to perform?\n\n  1) Add 2) Subtract 3) Multiply 4) Divide:\n");
let operation = readline.question();
// Error handling for operation specifically.

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

// Perform the operation on the two numbers.
// Print the result to the terminal.
let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

console.log(output);