
// GIVEN AN ARRAY % ROTATION STEPS NUMBER
// THEN PRINT LEFT ROTATION ARRAY

function arrayLeftRotation(array, steps) {
    const length = array.length;
    const sliceAt = steps % length;
    const firstItems = array.slice(0, sliceAt);
    const lastItems = array.slice(sliceAt, length);
    const mergedArray = [...lastItems, ...firstItems];
    console.log(mergedArray);
}

const array1 = [4, 5, 1, 2, 3];
arrayLeftRotation(array1, 2);

const array2 = [40, 50, 10, 20, 30];
arrayLeftRotation(array2, 2);
