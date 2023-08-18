let rlSync = require( 'readline-sync' );

let evenOrOdd = () => {
  userNum = rlSync.question( 'Please enter an integer: ' );
  let number = parseInt(userNum);

  if(Number.isInteger(number)) {
    if( ( number % 2 ) === 0 ) {
      console.log('Even!');
    } else {
      console.log('Odd!');
    }
  } else {
    console.log('Please enter an numerical value...');
  }
}

evenOrOdd();