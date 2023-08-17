// Function that copies an object, two arguments: the source object,
// and an optional array of keys to enter into the duplicate.
let copyObj = (src, keys) => {
  // Initializes a destination object
  let dest = {};

  // If statement that handles the presence (or lack of) key values
  if (keys) {
    // For each function in the key array, map the source's key to a
    // new key of the same name in the destination object
    keys.forEach(function(key) {
      dest[key] = src[key];
    });
    
    // Return the destination object
    return dest;
  } else {
    // If no keys are found, return a duplicate of the original object by
    // assigning the src object to the destination object
    return Object.assign(dest, src);
  }
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }