"use strict";

// Selection sort algorithm implementation

// ASC Order
function selectionSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    console.log(arr);
}
selectionSort([1, 2, 4, 3, 0, 10]);
selectionSort([3, 4, 1, 2, 1, 0, 2]);

// DESC Order
function selectionSort2(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex != i) {
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
    console.log(arr);
}
selectionSort2([1, 2, 3, 4, 5]);
selectionSort2([1, 2, 3, 4, 30, 20, 10]);