"use strict";

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false; // The target isn't found in the array, return false.
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 70;
const result = binarySearch(arr, target);
console.log(result ? `Target found at index: ${result}` : `${target} not found in the array.`);
