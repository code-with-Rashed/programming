// Memoization is an optimization technique used to improve the performance of functions by caching their results.
// When a function is called with the same inputs, it retrieves the result from the cache instead of recalculating it.
// This is particularly useful for expensive computations or repetitive tasks.

function memo(func) {
    let cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log("Show Result from Cache.");
            return cache[key];
        } else {
            const result = func(...args);
            cache[key] = result;
            console.log("Show Result from Original.");
            return result;
        }
    }
}

function sum(n1, n2) {
    return n1 + n2;
}

const memoSum = memo(sum);
console.log(memoSum(10, 20));
console.log(memoSum(10, 20));


function sub(n1, n2) {
    return n1 - n2;
}

const memoSub = memo(sub);
console.log(memoSub(100, 20));
console.log(memoSub(100, 20));


