function countLetters(str){
  var cleanStr = str.split(" ").join("").toLowerCase();
  var counted = {};
  for (var letter of cleanStr){
    if (counted.hasOwnProperty(letter)){
      counted[letter] ++;
    } else {
      counted[letter] = 1;
  }
}
  return counted;
}
console.log(countLetters("lighthouse labs"));