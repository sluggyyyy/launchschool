// let repeat = (num, str) => {
//   for (num = 0; num < 1; num += 1) {
//     str = str.concat(str, str);
//   }

//   console.log(str);
// }

let repeat = (n, string) => {
  let repetitions = '';

  while (n > 0) {
    repetitions += string;
    n -= 1;
  }

  return repetitions;
}

console.log(repeat(3, 'ha'));