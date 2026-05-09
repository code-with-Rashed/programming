"use strict";

// Circular Queue implementation in JavaScript
class CircularQueue {
    _queue = [];
    _capecity = 0;
    _head = 0;
    _tail = 0;
    _size = 0;

    constructor(capecity = 5) {
        this._capecity = capecity;
    }

    enQueue(value) {
        if (this._size === this._capecity) {
            console.log("Queue limit is full");
            return false;
        }
        this._queue[this._tail] = value;
        this._tail = (this._tail + 1) % this._capecity;
        this._size++;
        return true;
    }

    deQueue() {
        if (this._size === 0) {
            console.log("Queue is empty");
            return false;
        }
        const value = this._queue[this._head];
        this._queue[this._head] = undefined;
        this._head = (this._head + 1) % this._capecity;
        this._size--;
        return value;
    }

    print() {
        console.log(this._queue);
    }
}

const circularQueue = new CircularQueue(5);
circularQueue.enQueue(1);
circularQueue.enQueue(2);
circularQueue.enQueue(3);
circularQueue.enQueue(4);
circularQueue.enQueue(5);
circularQueue.print(); // [ 1, 2, 3, 4, 5 ]

circularQueue.enQueue(6); // Queue limit is full

circularQueue.deQueue();
circularQueue.deQueue();

circularQueue.enQueue(7);
circularQueue.enQueue(8);

circularQueue.enQueue(9); // Queue limit is full

circularQueue.print(); // [ 7, 8, 3, 4, 5 ]