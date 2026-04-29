"use strict";

// Bubble sort implementation in Javascript.

// ASC Order
function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        let isSwapped = false;
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    console.log(arr);
}
bubbleSort([10, 2, 5, 3, 1, 20]);

// DESC Order
function bubbleSortDesc(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        let isSwapped = false;
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    console.log(arr);
}
bubbleSortDesc([10, 2, 5, 3, 1, 20]);