let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(function(nest) {
  console.log(nest.filter(num => num % 2 === 0));
});