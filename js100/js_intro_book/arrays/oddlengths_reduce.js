let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = (input) => {
  return input.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if(length % 2 === 1){
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []); 
}

console.log(oddLengths(arr)); // => [1, 5, 3]