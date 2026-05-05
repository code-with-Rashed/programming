"use strict";

// Stack implementation in javascript
class Stack {
    _stack = [];
    _stackPointer = 0;
    _stackMaxSize = 5;

    constructor(stackMaxSize) {
        this._stackMaxSize = stackMaxSize;
    }

    push(value) {
        if (this._stackPointer < this._stackMaxSize) {
            this._stack[this._stackPointer] = value;
            this._stackPointer++;
        } else {
            throw new Error("Stack limit is full.");
        }
    }

    pop() {
        if (this._stackPointer > 0) {
            this._stackPointer--;
            return this._stack[this._stackPointer];
        } else {
            console.log("Stack is empty.");
        }
    }

    peek() {
        return this._stack[this._stackPointer - 1];
    }

    getStack() {
        return this._stack;
    }
}

const stack = new Stack(3);
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 3
stack.push(4);
stack.push(5); // Error: Stack limit is full.
stack.peek(); // 4
stack.getStack(); // [1, 2, 4]