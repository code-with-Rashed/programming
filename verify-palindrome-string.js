"use strict";

// Wrote some functions that check if a given string is a palindrome or not

// Approach : 1
function isPalindrome(str) {
    if (typeof str !== "string") return false; // Not a valid input
    const string = str.toLowerCase();
    let start = 0;
    let end = string.length - 1;

    while (start <= end) {
        if (string[start] !== string[end]) {
            return false; // Not a palindrome
        }
        start++;
        end--;
    }
    return true; // is a palindrome
}
console.log(isPalindrome("dad")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("mom")); // true

// Approach : 2

function isPalindromeString(str) {
    if (typeof str !== "string") return false; // Not a valid input
    const reversedString = str.toLowerCase().split("").reverse().join("");
    return str.toLowerCase() === reversedString;
}
console.log(isPalindromeString("Level")); // true
console.log(isPalindromeString("World")); // false
console.log(isPalindromeString("Noon"));  // true