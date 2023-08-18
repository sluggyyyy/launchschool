const firstName = 'Zachary ';
const lastName = 'Morgan';

console.log( `My name is ${ firstName + lastName }.` );

console.log( 4396 % 10 );
console.log( 439 % 10 );
console.log( 43 % 10 );
console.log( 4 % 10 );

console.log(
  typeof 'true',
  typeof false,
  typeof 1.5,
  typeof 2,
  typeof undefined,
  typeof { foo: 'bar' }
);

// => '510' because if an operand of the addition operator is a string, it will concatenate all values as if they were strings.
console.log( '5' + 10 );

// The Number expression coerces the String '5' into the Number 5
console.log( `The value of 5 + 10 is ${Number('5') + 10}` );

let names = [ 'asta', 'butterscotch', 'pudding', 'neptune', 'darwin' ];
let pets = {

  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',

}

// The function call below returns a true value because JS compares strings with ints in them starting left to right, this means it is evaluating 1 < 9, as it ignores the second digit.
const compareStringInts = (string1, string2) => {
  console.log(string1 < string2);
}

compareStringInts('12', '9');

