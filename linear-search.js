"use strict";

// Linear Search Algorithm
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the target element is not found
}
const array = [5, 3, 2, 8, 1];
const target = 2;
const result = linearSearch(array, target);
console.log(result); // Output: 2