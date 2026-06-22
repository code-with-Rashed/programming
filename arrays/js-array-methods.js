// JS Array Methods

const fruits = ["Apple", "Orange", "Banana"];

// JS Array Length - The length property returns the length (size) of an array
// Example

const totalFruit = fruits.length; // 3

// JS Array to String - The toString() method returns the elements of an array as a comma separated string.
// Example

const fruitList = fruits.toString(); // Apple,Orange,Banana

// JS Array at() 
// Example

const secondFruit = fruits.at(1); // Orange

// JS Array join() - The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator.
// Example 

const joinFruit = fruits.join("-"); // Apple-Orange-Banana

// JS array element add and remove by push() and pop() method
// Example

// The pop() method remove the last element from an array
fruits.pop();

// The pop() method returns the value that was popped out
const popedFruit = fruits.pop(); // Orange

// The push method adds a new element to an array (at the end)
fruits.push("Pineapple");

// The push() method return the new array length
const fruitListSizeAfterPushing = fruits.push("Kiwi"); // 3

// Shifting Elements
// Shifting is equivalent to popping, but working on the first element instead of last.

// JS Array shift()
// The shift() method removes the first element and shift all other elements to a lower index.
// Example
fruits.shift();

// The shift() method returns the value that was shifted out
// Example
const shiftedFruit = fruits.shift();

// JS Array unshift()
// The unshift() method adds a new element to an array at the beginning and unshifts older element

//Example
fruits.unshift("Lemon");

// the unshift() methods returns the new array length
// Example
const totalFruitAfterUnshift = fruits.unshift("Apple");

// Marging Arrays (Concatinating)

// JS Array concat()
// The concat() method creates a new array by merging (concatenating) existing array
// The concat() method does not change the existing arrays. It always returns a new array.

// Example
const myGirls = ["Fatema", "Khadija", "Asma"];
const myBoys = ["Muhammad", "Ahmad", "Alamin"];
const myChildren = myGirls.concat(myBoys);

// The concat() method can also take string as a arguments
const myNewBoy = myBoys.concat("Bakar");

// Array copyWithin()
// The copyWithin() method copies array elements to another position in an array.
// The copyWithin() method overwrites the existing values. and does not add items to the array. and does not change the length of the array.


const numbers = [10, 20, 30, 40];

// Example : Copy to index 2, all elements from index 0
numbers.copyWithin(2, 0);

// Example : Copy to index 2, the elements from index 0 to 2
numbers.copyWithin(2, 0, 2);

// Flattening an Array
// Flattenong is useful when you want to convert a milti-dimensional array into a one-dimensional array.
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.

const multiDimensionalArray = [1, [2], [3]];
multiDimensionalArray.flat(); // [1,2,3]

// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array
// Example
multiDimensionalArray.flatMap(n => n * 10); // [10,20,30]

// JS Array splice

//The splice() method can be used to add new items to an array
// Example
const cars = ["TATA", "BMW", "Volvo"];

cars.splice(1, 0, "Rols Royels"); // [ 'TATA', 'Rols Royels', 'BMW', 'Volvo' ]

// The splice() method returns an array with the deleted items
// Example
cars.splice(2, 2, "Lemborgini"); // [ 'TATA', 'Rols Royels', 'Lemborgini' ]

// Using splice() to remove elements
cars.splice(1, 1); // [ 'Rols Royels' ]

// JS Array toSpliced()
// toSplice() method isn't change the original array

const month = ["Jan", "Fev", "Mar"];
const splicedMonth = month.toSpliced(0, 1); // ["Fev", "Mar"];

// JS Array slice()
// The slice() method slices out a piece of an array into a new array
// slice() method isn't change original array

month.slice(1); // [ 'Fev', 'Mar' ]
month.slice(1, 2); // ['Fev']






