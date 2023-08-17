let compareByLength = (str1, str2) => {
  let len1 = str1.length;
  let len2 = str2.length;
  
  if (len1 < len2) {
    return -1;
  } if (len1 > len2) {
    return 1;
  } if (len1 === len2) {
    return 0;
  }
}

console.log(compareByLength('patience', 'perseverance'));
console.log(compareByLength('strength', 'dignity'));
console.log(compareByLength('humor', 'grace'));