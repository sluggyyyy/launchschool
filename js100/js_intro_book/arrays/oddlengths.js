let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = (input) => {
  let lengths = input.map((index) => index.length);
  let oddLengths = lengths.filter(index => index % 2 !== 0);
  return oddLengths;
}

console.log(oddLengths(arr)); // => [1, 5, 3]
