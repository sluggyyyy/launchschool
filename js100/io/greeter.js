let rlSync = require('readline-sync');

let name = (text) => {
  let input = prompt(text);
  return input;
}

let firstName = name("What is your first name?\n");
let lastName = name("What is your last name?\n");
console.log(`\nWhy hello, ${firstName} ${lastName}!`);