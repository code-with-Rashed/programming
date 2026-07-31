// Find the longest word from a string.

function findLongestWord(str) {
  const words = str.split(" ");
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
const str = "I Love JAVASCRIPT language.";
const output = findLongestWord(str);
console.log(output); // JAVASCRIPT

function longestWord(str) {
  let word = "";
  let longestWord = "";
  for (let i = 0; i < str.length; i++) {
    word = word + str[i];
    if ((str[i] === " ") | (i === str.length - 1)) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
      word = "";
    }
  }
  return longestWord;
}
const string = "I Live in Bangladesh not in India.";
const result = longestWord(string);
console.log(result); // Bangladesh
