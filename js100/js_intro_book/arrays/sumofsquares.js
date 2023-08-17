let array = [3, 5, 7];

let sumOfSquares = (input) => {
  // use reduce to accumulate the sum of the squares of the elements in the array
  return input.reduce((accumulator, element) => accumulator + (element * element), 0);
}

console.log(sumOfSquares(array)); // => 83