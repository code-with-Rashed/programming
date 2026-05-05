"use strict";

// Write a function that takes an array of numbers and returns true if the numbers are consecutive and false if they are not. 
// Consecutive numbers are numbers that follow each other in order, without gaps.
// For example, 1, 2, 3, 4, 5 are consecutive numbers, while 1, 2, 4, 5 are not.

function consecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(consecutive([1, 2, 3, 4, 5])); // true
console.log(consecutive([1, 2, 3, 5])); // false;