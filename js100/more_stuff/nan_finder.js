let isNotANumber = (value) => {
  return value !== value;
}

console.log(isNotANumber(undefined));
console.log(isNotANumber(NaN))