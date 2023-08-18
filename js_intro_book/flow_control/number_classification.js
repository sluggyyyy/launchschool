let rlSync = require('readline-sync');

let numberRange = () => {
  let userNum = rlSync.question('Please enter a number 1-100: ');

  if(userNum < 100) {
    if(userNum > 50) {
      console.log(`${userNum} is between 51 and 100`)
    } else {
      if(userNum >= 0) {
        console.log(`${userNum} is between 0 and 50`);
      } else {
        console.log(`${userNum} is less than 0`)
      }
    }
  } else {
    console.log(`${userNum} is greater than 100`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);