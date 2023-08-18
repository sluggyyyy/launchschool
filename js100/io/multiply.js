let rlSync = require('readline-sync');

let multiply = (num1, num2) => num1 * num2;

let number1 = rlSync.question('Enter the first number: ');
let number2 = rlSync.question('Enter the second number: ')

console.log(multiply(number1, number2));