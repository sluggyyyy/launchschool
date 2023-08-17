let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

let check = (groceries) => {
  groceries.forEach(grocery => {
    console.log(grocery);
    groceries.slice(0,0);
  });
}

console.log(check(groceryList)); // []