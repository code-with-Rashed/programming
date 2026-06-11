"use strict";

// Throtlling Examples

// Preventing order duplicate submit at a time

function handleOrderSubmit() {
    const element = this;
    element.innerText = "Order Processing...";
    element.disabled = true;
    element.classList.add("btn-disabled");

    // api response simulation
    const apiResponseTime = 2000;
    setTimeout(() => {
        element.innerText = "Order Now";
        element.disabled = false;
        element.classList.remove("btn-disabled");
        console.log("Order processed at " + new Date().toLocaleTimeString());
    }, apiResponseTime)
}
const orderButton = document.getElementById("order-button");
orderButton.addEventListener("click", handleOrderSubmit);


// Print search input value with throtlling features.

const searchInput = document.getElementById("search-input");
const showSearchInput = document.getElementById("show-search-input");

searchInput.addEventListener("input", function (e) {
    const value = e.target.value.trim();
    if (value) {
        showSearchInput.style.padding = "5px";
        showSearchInput.textContent = "Searching : " + value;
    } else {
        showSearchInput.textContent = "";
        showSearchInput.style.padding = "0";
    }
    throtlleSearchInput(value);
});

const throtlleSearchInput = throtlle(printSearchInput, 2000);

function printSearchInput(value) {
    console.log("Search input : " + value);
}

function throtlle(fun, delay) {
    let tempTime = 0;
    return function (...args) {
        const time = Date.now();
        if ((time - tempTime) >= delay) {
            tempTime = Date.now() + delay;
            fun(...args);
        }
    }
}
