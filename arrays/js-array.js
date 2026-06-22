// Creating array.
// Example

const cars = ["BMW", "VOLVO", "TOYTA"];
const newCars = [];
newCars[0] = "Rols Royels";
newCars[1] = "Ferari";
newCars[2] = "Lemborgini";

// create array using js new keyword. 
// Example

const fruits = new Array("Apple", "Orange", "Banana");

// Accessing Array Elements by index number.
// Example

const firstCar = cars[0];
const secondNewCar = newCars[1];
const fruit = fruits[3];

// Changing array element.
// Example

cars[0] = "TATA";

// Converting an array to a string.
// Example

const fruitsList = fruits.toString();


// Get Array Length.
// Example

const totalCar = cars.length;

// Accessing the array's last element
const lastCar = cars[totalCar - 1];

// Looping on array elements
// Example

for (let car = 0; car < totalCar; car++) {
    console.log(cars[car]);
}

// looping an array with forEach method
// Example

fruits.forEach((fruit) => {
    console.log(fruit);
});

// Adding array elements with push method or using array length property.
// Example

fruits.push("Lemon");
fruits[fruits.length] = "Pineapple";

cars[8] = "test";

// How to recognize an array
// Example

const isCarList = Array.isArray(cars); // true
const isFruitList = (fruits instanceof Array); // true
