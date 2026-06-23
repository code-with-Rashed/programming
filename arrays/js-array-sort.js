// The sort() method sorts an array alphabetically

var fruits = ["Banana", "Orange", "Apple", "Pineapple"];

fruits.sort();
console.log(fruits);

// The reverse() method reverse the elements in array
fruits.reverse();
console.log(fruits);

// The toSorted() method as a safe way to sort an array without altering the original array
var sortedFruits = fruits.toSorted();
console.log(sortedFruits);

// The toReversed() method as a safe way to reverse an array without altering the original array
var reverseSortedFruits = fruits.toReversed();
console.log(reverseSortedFruits);

// Numeric Sort

// By default, the sort() method sorts values as strings
// If you can sort numbers. you can fix this by providing a compare function

var number = [20, 30, 3, 1, 2];
number.sort(function (a, b) { return a - b });
console.log(number)

// reverse sort
number.sort(function (a, b) { return b - a });
console.log(number);

// Find min or max number using sort()

// Sort ascending 
var number = [20, 30, 3, 1, 2];
number.sort(function (a, b) { return a - b });
console.log(number[0]); // result min number is 1
console.log(number[number.length - 1]); // result max number is 30

// Sort descending
var number = [20, 30, 3, 1, 2];
number.sort(function (a, b) { return b - a });
console.log(number[0]); // result max number is 30
console.log(number[number.length - 1]); // result min number is 1

// Find min or max array item using Math.min() and Math.max()
var number = [20, 30, 3, 1, 2];
var minNumber = Math.min.apply(null, number);
var maxNumber = Math.max.apply(null, number);
console.log(minNumber); // result min number is 1
console.log(maxNumber); // result max number is 30

// Find min number 
var number = [20, 30, 3, 1, 2];
function min(arr) {
    let length = arr.length;
    let min = Infinity;
    while (length--) {
        if (arr[length] < min) {
            min = arr[length];
        }
    }
    return min;
}
console.log(min(number)); // result min number is 1

// Find max number
var number = [20, 30, 3, 1, 2];
function max(arr) {
    let length = arr.length;
    let max = -Infinity;
    while (length--) {
        if (arr[length] > max) {
            max = arr[length];
        }
    }
    return max;
}
console.log(max(number)); // result max number is 30