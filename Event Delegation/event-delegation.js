// "use strict";

const parentButtons = document.querySelector(".parent-buttons");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        console.log(event.target.innerText + " is clicked.");
    });
});

// This new button is not eligible for that dynamic click event listener
const makeButton = document.createElement("button");
makeButton.innerText = "Button " + (buttons.length + 1);
parentButtons.append(makeButton);

// Event Delegation example

const parentLists = document.querySelector(".parent-list");

parentLists.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.add("parent-list-li-hover");
    }
});

const newList = document.createElement("li");
newList.innerText = "JAVA";
parentLists.append(newList);
