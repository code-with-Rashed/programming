// The forEach() method call a function once for each array element.
var numbers = [10, 20, 30, 40];
numbers.forEach(function (value, index, array) {
    console.log(value)
    // console.log(index)
    // console.log(array)
});

// The map() method creates a new array by performing a function one each array element
// The map() method does not change the original array
var numbers = [20, 20, 30, 40];
numbers.map((num, index, array) => {
    console.log(num)
    // console.log(index)
    // console.log(array)
});

// The filter() method creates a new array with array elements that pass a test
var age = [20, 12, 32, 14];
var adults = age.filter((value) => {
    return value > 18;
});
console.log(adults);

// The reduce() method runs a function on each array element to produce a single value
// The reduce() method does not reduce the original array
var numbers = [20, 20, 30, 40];
var sum = numbers.reduce((previous, current) => {
    return previous + current;
});
console.log(sum);

// The reduce() method can accept a initial value
var numbers = [20, 20, 30, 40];
var sum = numbers.reduce((previous, current) => {
    return previous + current;
}, 100);
console.log(sum);

// The every() method checks if all arrays value pass a test
var age = [20, 12, 32, 14];
var isAllAdult = age.every((value) => {
    return value > 18;
});
console.log(isAllAdult); // false

// The some() method checks if some array value pass a test
var age = [20, 12, 32, 14];
var isSomeAdults = age.some((value) => {
    return value > 18;
});
console.log(isSomeAdults); // true

// The Array.from() method returns an array object
var text = "abc";
console.log(Array.from(text));

// The Array.from() method has an optional paramiter which allows you to execute a function on each element of the new array
var number = [10, 20, 30];
var res = Array.from(number, (num) => { return num * 10 });
console.log(res);

// The Array.keys() method returns an array iterator object with the keys of an array
var fruits = ["Banana", "Apple", "Orange"];
var fruitListIndex = fruits.keys();
for (let index of fruitListIndex) {
    console.log(index);
}

// The Array.entries() method returns an array iterator  with the keys/value pairs of an array
var fruits = ["Banana", "Apple", "Orange"];
var keyValueArr = fruits.entries();
for (let keyValue of keyValueArr) {
    console.log(keyValue);
}

// The with() method as a safe way to update elements in an array without altering the original array
var month = ["January", "Febru"];
var fixMonth = month.with(1, "February");
console.log(fixMonth);

// The ... operator expands an array into individual elements. this can be used join arrays.
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var merge = [...arr1, ...arr2];
console.log(merge);

// The rest operator (...) allow us to destruct an array and collect the leftovers
var a, rest;
var arr = [1, 2, 3, 4];
[a, ...rest] = arr;
console.log(a);
console.log(rest);

// The find() method returns the value of the first element that passes a test

var age = [20, 12, 32, 14, 12];
var find = age.find((value) => {
    return value == 12;
});
console.log(find);

// The includes() method returns true if an array contains a specified value
var age = [20, 12, 32, 14, 12];
var isExist = age.includes(20);
console.log(isExist); // true