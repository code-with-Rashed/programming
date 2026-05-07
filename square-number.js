"use strict";

// Given two arrays, write a function to determine if the second array contains the squares of the elements in the first array. The frequency of the elements must also be the same.

// Approach 1
function isSquareNumberExist(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let square = arr1[i] * arr1[i];
        if (!arr2.includes(square)) {
            return false;
        }
    }
    return true;
}

isSquareNumberExist([1, 2, 3], [1, 4, 9]); // true
isSquareNumberExist([1, 2, 3], [2, 7, 4]); // false

// Approach 2
function isExistSquareNumber(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let flag = false;
        let square = arr1[i] * arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            if (square === arr2[j]) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            return false;
        }
    }
    return true;
}
isExistSquareNumber([1, 2, 3], [1, 4, 9]); // true
isExistSquareNumber([1, 2, 3], [2, 7, 4]); // false