"use strict";

// Reverse an array without using built-in functions

// Approach one
function reverseArray1(array) {
    const length = array.length - 1;
    let arrayReversing = [];
    for (let i = length; i >= 0; i--) {
        arrayReversing.push(array[i]);
    }
    console.log(arrayReversing);
}
reverseArray1([1, 2, 3, 4, 5]);


// Approach 2
function reverseArray2(array) {
    const length = array.length;
    let arrayReversing = [];
    for (let i = 0; i < length; i++) {
        arrayReversing[i] = array[length - 1 - i]
    }
    console.log(arrayReversing);
}
reverseArray2([1, 2, 3, 4, 5]);


// Approach 3
function reverseArray3(array) {
    const length = array.length;
    let lastIndex = length - 1;
    for (let i = 0; i < length / 2; i++, lastIndex--) {
        let temp = array[i];
        array[i] = array[lastIndex];
        array[lastIndex] = temp;
    }
    console.log(array);
}
reverseArray3([1, 2, 3, 4, 5, 6]);


// Approach 4
function reverseArray4(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
    }
    console.log(array);
}
reverseArray4([10, 20, 30, 40]);