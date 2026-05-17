"use strict";

// Write a function that takes an array of numbers and returns the smallest number in the array. If the array is empty, return null.

function findMin(arr) {
    if (arr.length === 0) return null;
    return arr.reduce((min, num) => num < min ? num : min, arr[0]);
}
console.log(findMin([1, 2, 3, 4, 5])); // should return 1
console.log(findMin([-1, -2, -3, -4, -5])); // should return -5
console.log(findMin([])); // should return null