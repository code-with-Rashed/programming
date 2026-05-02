"use strict";

//  Quick Sort is a divide-and-conquer algorithm that sorts an array by partitioning it into two sub-arrays based on a pivot element.
//  The elements less than the pivot are moved to the left of the pivot, and the elements greater than the pivot are moved to the right.
//  This process is recursively applied to the sub-arrays until they are sorted.

// ASC order
function quickSort(arr) {
    const length = arr.length;
    if (length <= 1) {
        return arr;
    }
    const pivot = arr[length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    const leftPart = quickSort(left);
    const rightPart = quickSort(right);
    return leftPart.concat(pivot, rightPart);
}
console.log(quickSort([10, 7, 4, 9, 1, 5])); // [1, 4, 5, 7, 9, 10]


// DESC order
function quickSortDesc(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSortDesc(arr, left, pivotIndex - 1);
        quickSortDesc(arr, pivotIndex + 1, right);
    }
    return arr;
}
function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (arr[j] > pivot) {
            i++;
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    const temp = arr[i + 1];
    arr[i + 1] = arr[right];
    arr[right] = temp;
    return i + 1;
}
console.log(quickSortDesc([10, 7, 4, 9, 1, 5])); // [10, 9, 7, 5, 4, 1]