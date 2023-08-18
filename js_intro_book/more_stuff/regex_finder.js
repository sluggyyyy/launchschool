let allMatches = (arr, regex) => {
  let result = [];
  for (let value of arr ) {
    if (value.match(regex)) {
      result.push(value);
    }
  }

  return result;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']