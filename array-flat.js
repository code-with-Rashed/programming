const arr = [1, [2, 3], 4, [5, [6, 7, [8, 9, [10]]]]];

// approach one
const flat = arr.flat(Infinity);
console.log(flat);

// approach two
const flatArray = arr.toString().split(",").map(Number);
console.log(flatArray);

// approach three

function arrayFlatten(array) {
    const flatArray = [];
    for (let value of array) {
        if (Array.isArray(value)) {
            flatArray.push(...arrayFlatten(value));
        } else {
            flatArray.push(value);
        }
    }
    return flatArray;
}
console.log(arrayFlatten(arr));

// approach four
function flattenArray(array, depth = 1) {
    const flatArray = [];
    for (let value of array) {
        if (Array.isArray(value) && depth > 0) {
            flatArray.push(...flattenArray(value, depth - 1));
        } else {
            flatArray.push(value);
        }
    }
    return flatArray;
}
console.log(flattenArray(arr));
console.log(flattenArray(arr, Infinity));

