"use strict";

// Write a function that takes an array of numbers and returns the largest number in the array. If the array is empty, return null.

function findMax(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([1, 2, 3, 4, 5])); // should return 5
console.log(findMax([-1, -2, -3, -4, -5])); // should return -1
console.log(findMax([])); // should return null