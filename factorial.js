"use strict";

// This function calculates the factorial of a non-negative integer usiing recursion.

// Approach 1
function factorial(n) {
    if (typeof n !== "number" || n < 0) {
        return "Error: Input must be a non-negative integer.";
    }
    let calculatedFactorial = n === 0 ? 1 : n * factorial(n - 1);
    return calculatedFactorial;
}
factorial(5); // Output: 120

// Approach 2 
function factorialIterative(n) {
    if (typeof n !== "number" || n < 0) {
        return "Error: Input must be a non-negative integer.";
    }
    let a = n;
    let b = 0;
    for (let i = n - 1; i > 0; i--) {
        b = a * i;
        a = b;
    }
    console.log(a);
}
factorialIterative(10); // Output: 3628800