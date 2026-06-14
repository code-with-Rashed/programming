"use strict";

// Event propagation is a mechanism that defines how events travel through the doom tree to reach their target and what happens afterward.

// Example of event bubbling

const parent = document.querySelector(".parent-component");
const child = document.querySelector(".child-component");
const button = document.querySelector(".bubble-button");

parent.addEventListener("click", listener);
child.addEventListener("click", listener);
button.addEventListener("click", listener);

function listener(event) {
    const currentElement = event.currentTarget;
    if (currentElement.classList.contains("parent-component")) {
        currentElement.classList.toggle("bg-skyblue");
        console.log('test')
    } else if (currentElement.classList.contains("child-component")) {
        currentElement.classList.toggle("bg-aqua");
    }
}

// Example of event capturing

const firstComponent = document.querySelector(".first-component");
const secondComponent = document.querySelector(".second-component");
const captureButton = document.querySelector(".capture-button");

firstComponent.addEventListener("click", listen, { capture: true });
secondComponent.addEventListener("click", listen, { capture: true });
captureButton.addEventListener("click", listen);

function listen(event) {
    const currentElement = event.currentTarget;
    if (currentElement.classList.contains("first-component")) {
        currentElement.classList.toggle("bg-chocolate");
    } else if (currentElement.classList.contains("second-component")) {
        currentElement.classList.toggle("bg-blue");
    }
}

