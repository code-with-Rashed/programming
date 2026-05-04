"use strict";

// Function to check if a number is even or odd.
function evenOddNumber(num) {
    if (num % 2 === 0) {
        console.log(num + " is an even number.");
    } else {
        console.log(num + " is an odd number.");
    }
}
evenOddNumber(10); // Output: 10 is an even number.
evenOddNumber(7); // Output: 7 is an odd number.

// Function to separate even and odd numbers from a list.
function evenOddNumberList(numbers) {
    const evenNumbers = [];
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        } else {
            oddNumbers.push(numbers[i]);
        }
    }
    console.log("Even numbers " + evenNumbers);
    console.log("Odd numbers " + oddNumbers);
}
evenOddNumberList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Output: Even numbers 2,4,6,8,10 and Odd numbers 1,3,5,7,9
