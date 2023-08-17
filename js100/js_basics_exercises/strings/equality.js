let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

let compare = (str1, str2) => {
  let low1 = str1.toLowerCase();
  let low2 = str2.toLowerCase();

  if (low1 === low2) {
    return true;
  } else {
    return false;
  }
}

console.log(compare(string1, string2));
console.log(compare(string1, string3));