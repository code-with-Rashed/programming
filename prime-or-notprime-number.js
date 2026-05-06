"use strict";

// Function to check if a number is prime or not
function isPrimeOrNotPrimeNumber(num) {
    if (num <= 1) {
        return "Not Prime Number";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "Not Prime Number";
        }
    }
    return "Prime Number";
}
isPrimeOrNotPrimeNumber(20); // Output: Not Prime Number
isPrimeOrNotPrimeNumber(7); // Output: Prime Number

// Class to list prime and not prime numbers up to a given number
class PrimeOrNotPrimeNumbersList {
    constructor(number) {
        this.number = number;
    }

    checkPrimeOrNotPrimeNumber(num) {
        let flag = 0;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                flag = 1;
                break;
            }
        }
        if (flag === 0) {
            return "prime";
        } else {
            return "not-prime";
        }
    }

    printPrimeOrNotPrimeNumber() {
        let primeNumberList = "";
        let notPrimeNumberList = "";
        for (let i = 1; i <= this.number; i++) {
            let check = this.checkPrimeOrNotPrimeNumber(i);
            if (check === "prime") {
                primeNumberList += i + ", ";
            } else {
                notPrimeNumberList += i + ", ";
            }
        }
        console.log(this.number + " is contained these prime numbers: " + primeNumberList);
        console.log(this.number + " is contained these not prime numbers: " + notPrimeNumberList);
    }
}
const primeOrNotPrimeNumbersList = new PrimeOrNotPrimeNumbersList(20);
primeOrNotPrimeNumbersList.printPrimeOrNotPrimeNumber();
