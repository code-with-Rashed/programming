// Take 2 items from the sorted array and sum them. If the result is 0,  return items. And stop summing.
//  If the result is not 0, continue summing to the last item.

// -------------------------------------------------------------

// Given an array and type then return sorted array according to type
function sort(array, type = "asc") {
    let sortedArray = [];
    if (type == "asc") {
        sortedArray = array.sort((a, b) => a - b);
    } else if (type == "desc") {
        sortedArray = array.sort((a, b) => b - a);
    }
    return sortedArray;
}


// approach 1

function findSumZero(arr) {
    const array = sort(arr);
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if ((array[i] + array[j]) === 0) {
                return `${array[i]} + ${array[j]} = 0`;
            }
        }
    }
}
const res = findSumZero([-5, -4, -3, 3, 40, 50]);
console.log(res); // Output : -3 + 3 = 0

// approach 2 (optimize solution)

function getSumZero(arr) {
    const array = sort(arr);
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let sum = array[left] + array[right];
        if (sum === 0) {
            return `${array[left]} + ${array[right]} = 0`;
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }

    }
}
const result = getSumZero([-5, -4, -3, -2, 2, 33, 40, 50]);
console.log(result); // Output : -2 + 2 = 0
