//  GIVEN AN ARRAY THEN RETURN AVERAGE NUMBER AFTER CALCULATING ARRAY ITEMS SUM DEVIDED BY ARRAY LENGTH.

function average(array) {
    const length = array.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum = sum + array[i];
    }
    const avg = sum / length;

    return Number.isInteger(avg) ? avg : parseFloat(avg.toFixed(2));
}
const calculateAverage = average([80, 60, 70, 90]);
const calculatingAverage = average([80.23, 60, 70.60, 90.40]);

console.log(calculateAverage);
console.log(calculatingAverage);