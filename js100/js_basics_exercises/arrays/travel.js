let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

let contains = (dst, arr) => {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === dst) {
      return true;
    }
  }

  return false;
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false
