// finde the first unique character
// Time complexity is O(n2)

function findFirstUniqueCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let isUnique = true;
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return str[i];
    }
  }
}
const characters = "ababccideigLedfg";
const output = findFirstUniqueCharacter(characters);
console.log(output); // output is L

// finde the first unique character
// Time complexity is O(n)

function findFirstUniqueChar(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let j = 0; j < str.length; j++) {
    if (charCount[str[j]] === 1) {
      return str[j];
    }
  }
  return null;
}

const character = "ababccideiGlesldf";
const result = findFirstUniqueChar(character);
console.log(result); // output is G
