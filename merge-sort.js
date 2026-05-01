"use strict";

// Merge sort algorithm implementation

// ASC order

function devide(arr) {
    const length = arr.length;
    if (length <= 1) {
        return arr;
    }
    const mid = Math.floor(length / 2);
    const left = devide(arr.slice(0, mid));
    const right = devide(arr.slice(mid));
    return conquer(left, right);
}

function conquer(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
const arr = [2, 1, 5, 0, 4, 3];
const sortedArr = devide(arr);
console.log(sortedArr); // Output: [0, 1, 2, 3, 4, 5]
