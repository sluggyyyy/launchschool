let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
let upperKeys = objKeys.map((key) => key.toUpperCase());
console.log(upperKeys);

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = '3';

console.log(myObj);