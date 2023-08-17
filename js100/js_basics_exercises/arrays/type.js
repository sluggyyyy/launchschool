function filter(input) {
  if (Array.isArray(input)) {
    return true;
  } else return false;
}

const normalObj = { bone: 'you',};
const normalArr = [0, 1, 2];

console.log(filter('hi'));
console.log(filter(normalObj));
console.log(filter(normalArr));