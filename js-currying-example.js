/** 
  Currying is a functional programming technique where a function with multiple arguments 
  is transformed into a sequence of functions that each take a single argument.
  This allows for partial application of functions,
  making it easier to create new functions by fixing some of the arguments.
*/

// Burger Example

//   Normal Function Eample 
function makeMyBurger(bun, patty, topping) {
    return `Here is Your ${bun} burger with ${patty} and ${topping}.`;
}
const myBurger = makeMyBurger('sesame', 'beef', 'Lettuce');
console.log(myBurger); // Here is Your sesame burger with beef and Lettuce.

// Currying function example
function makeMyNewBurger(bun) {
    return function (patty) {
        return function (topping) {
            return `Here is Your ${bun} burger with ${patty} and ${topping}.`;
        }
    }
}
const chooseBun = makeMyNewBurger('Butter Bun');
const choosePatty = chooseBun('Chicken');
const myNewBurger = choosePatty('Cheese');
console.log(myNewBurger); // Here is Your Butter Bun burger with Chicken and Cheese.

// Currying function example with arrow function
const makeMyNewBurgerWithArrowFunc = (bun) => (patty) => (topping) => {
    return `Here is Your ${bun} burger with ${patty} and ${topping}.`;
}
const myAnotherNewBurger = makeMyNewBurgerWithArrowFunc('Gluten Free Bun')('Veggie')('Tomato');
console.log(myAnotherNewBurger); // Here is Your Gluten Free Bun burger with Veggie and Tomato.

// ---------------------------------------------------------------

// Discount Example

// Normal Function Example
function calculateDiscount(customerType, price) {
    if (customerType === 'Regular') {
        return price * 0.9; // 10% discount for regular customers.
    } else if (customerType === "Premium") {
        return price * 0.8; // 20% discount for premium customers.
    }
}
const regularCustomerPrice = calculateDiscount('Regular', 100);
console.log(regularCustomerPrice); // 90
const premiumCustomerPrice = calculateDiscount('Premium', 100);
console.log(premiumCustomerPrice) // 80

// Currying Function Example
function calculationOfDiscount(discountRate) {
    return function (price) {
        return price * (1 - discountRate);
    }
}
const regularCustomerDiscount = calculationOfDiscount(0.1);
const premiumCustomerDiscount = calculationOfDiscount(0.2);
console.log(regularCustomerDiscount(100)); // 90
console.log(premiumCustomerDiscount(100)); // 80

const studentCustomerDiscount = calculationOfDiscount(0.15);
console.log(studentCustomerDiscount(100)); // 85