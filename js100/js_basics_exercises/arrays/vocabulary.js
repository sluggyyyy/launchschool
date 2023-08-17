let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

let iterate = (arr) => {
  arr.forEach((index) => {
    index.forEach((sub) => {
      console.log(sub);
    });
  });
}

iterate(vocabulary);