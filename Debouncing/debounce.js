"use strict";

// Debouncing Example: Preventing Multiple Clicks on an Order Button

const orderButton = document.getElementById("order-button");

orderButton.addEventListener("click", debounceOrderProcess(processOrder, 2000));

function processOrder() {
    console.log("Order processed at " + new Date().toLocaleTimeString());
}

function debounceOrderProcess(func, delay) {
    let timeoutId;
    return function () {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(func, delay);
    }
}

// Debouncing Example: Handling Search Input

const searchInput = document.getElementById("search-input");
const showSearchInput = document.getElementById("show-search-input");
const printDebouncedSearchInput = debounceSearch(printSearchInput, 1000);

function printSearchInput(value) {
    console.log("Search input : " + value);
};

function debounceSearch(func, delay) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearInterval(timeoutId);
        }
        timeoutId = setTimeout(function () {
            func.apply(this, args);
        }, delay)
    }
}

searchInput.addEventListener("input", function (event) {
    const value = event.target.value.trim();
    if (value) {
        showSearchInput.style.padding = "5px";
        showSearchInput.textContent = "Searching : " + value;
    } else {
        showSearchInput.textContent = "";
        showSearchInput.style.padding = "0";
    }
    printDebouncedSearchInput(value);
});
