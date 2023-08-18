let rlSync = require('readline-sync');

let capitalizer = () => {
  let userString = rlSync.question('Enter your sentence, if it is longer than 10 characters it will be capitalized: ')

  if(userString.length >= 10) {
    capsString = userString.toUpperCase();
    console.log(capsString);
  } else {
    console.log(userString);
  }
}

capitalizer();