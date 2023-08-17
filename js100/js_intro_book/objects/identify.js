function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

// Variables: hello(), greeting, name, xyzzy(), howdy, foo
// Property Names: a, b, c, d, [0], [1], [2]
// Primitives: 1, 2, 3, 4, 5, 'Hi', 'Grace', ' '
// Objects: { a... }, [3, 4, 5], {}, hello(), xyzzy()

function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

// Variables: bar, arg1, arg2, foo, qux, result, bar()
// Property Names: abc, abc[0-3], abc[3][0-2], def, ghi, jkl, mno, pqr
// Primitives: 'Hello', abc, abc[0-3], abc[3][0-2], def, ghi, jkl, mno, pqr, 1, 2, 3, 4, 5, 6, NaN, 'Victor', 'Antonia'
// Objects: bar(), foo, qux, abc, abc[3], 'Victor', 'Antonia'