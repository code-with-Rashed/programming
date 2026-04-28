"use strict";

// Insertion sort algorithm implementation

// ASC Order
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let item = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > item) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = item;
    }
    console.log(arr);
}
insertionSort([4, 2, 3, 5, 0, 1]);

// DESC Order
function insertionSorts(arr) {
    for (let i = 1; i < arr.length; i++) {
        let item = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] < item) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = item;
    }
    console.log(arr);
}
insertionSorts([10, 4, 2, 3, 5, 0, 1]);