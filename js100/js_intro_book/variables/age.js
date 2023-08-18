const AGE = 21;
console.log(`You are ${AGE} years old.`)

const ageLister = (age) => {
  for (let i = 0; i < 4; i ++) {
    console.log(`In ${(i +1) * 10} years you will be ${age + ((i + 1) * 10)}`);
  }
}

ageLister(AGE);
