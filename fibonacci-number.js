
// The Fibonacci sequence is a series of numbers where each number is the sum of the two before it, starting with 0 and 1.

function fibonacci(number) {
    if (number < 0 || !Number.isInteger(number)) return null; // Return null for negative numbers and non-integer inputs
    if (number === 0) return 0; // Base case: F(0) = 0
    if (number === 1) return 1; // Base case: F(1) = 1

    let a = 0;
    let b = 1;
    let temp = 0;

    for (let i = 2; i <= number; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}
console.log(fibonacci(10)); // Output: 55


function fibonacciDetails(number) {
    let a = 0;
    let b = 1;
    let c = 0;

    let sequenceCalculationResult = ""; // store fibonacci calculation number sequence
    let sequenceResult = ""; // store fibonacci number sequence

    for (let i = 0; i < number; i++) {

        sequenceCalculationResult += `${a} + ${b} = ${a + b}\n`;
        sequenceResult += `${a},`;

        a = a + b;
        b = c;
        c = a;

        if (i === number - 1) {
            sequenceResult += c;
        }
    }
    console.log(sequenceCalculationResult, "\n", sequenceResult);
}
fibonacciDetails(5);
