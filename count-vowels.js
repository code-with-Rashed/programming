"use strict";

const sentence = "Oh The Cats sleep peacefully under bright stars.";

const countVowels = (str) => {
  let totalVowels = 0;
  const vowelCounts = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  const normalizedStr = str.toLowerCase();

  for (const chr of normalizedStr) {
    if (chr in vowelCounts) {
      totalVowels++;
      vowelCounts[chr]++;
    }
  }
  console.log("Total vowels found : ", totalVowels);
  console.log("Breakdown of each vowel found : ", vowelCounts);
};
countVowels(sentence);
