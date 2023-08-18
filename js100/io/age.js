let rlSync = require('readline-sync');

let userAge = rlSync.question('What is your age?\n');
userAge = Number(userAge);

console.log(`\nYou are ${userAge} years old.\n`)

const ageLister = (age) => {
  for (let i = 0; i < 10; i ++) {
    if((age + ((i + 1) * 10)) < 100) {
      console.log(`In ${(i +1 ) * 10} years you will be ${age + ((i + 1) * 10)}`);
    } else {
      console.log(`In ${(i + 1) * 10} years... you will likely be dead.`);
      break;
    }
  }
}

ageLister(userAge);