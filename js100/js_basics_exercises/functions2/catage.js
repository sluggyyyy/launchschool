firstYear = 15;
secondYear = 9;
beginningYears = firstYear + secondYear;

let catAge = (age) => {
  if (age < 1) return 0;
  if (age === 1) return firstYear;
  if (age === 2) return firstYear + secondYear;

  if (age > 2) {
    return (((age - 2) * 4) + beginningYears);
  }
}

console.log(
  catAge(0), // 0
  catAge(1), // 15
  catAge(2), // 24
  catAge(3), // 28
  catAge(4), // 32
);