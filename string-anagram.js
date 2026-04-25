"use strict";

// Verify if two strings are anagrams of each other or not.

// Approach : 1
function stringAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false; // If the Length of the string is not same then it is not an Anagram
    }

    let strOne = {};

    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if (strOne[char]) {
            strOne[char]++;
        } else {
            strOne[char] = 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        let chr = str2[i];
        if (strOne[chr]) {
            strOne[chr]--;
        } else {
            return false;
        }
    }
    return true;
}
stringAnagram("listen", "silent"); // true
stringAnagram("hello", "world");  // false
stringAnagram("appel", "papel");  // true

// Approach : 2
function anagramString(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let sortedStr1 = str1.toLowerCase().split("").sort().join("");
    let sortedStr2 = str2.toLowerCase().split("").sort().join("");
    return sortedStr1 === sortedStr2;
}
anagramString("listen", "silent"); // true
anagramString("hello", "world");  // false
anagramString("Appel", "Papel");  // true
