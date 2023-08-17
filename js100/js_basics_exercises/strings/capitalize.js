let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];
console.log(words);

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}


console.log(capitalizedWords.join(' '));