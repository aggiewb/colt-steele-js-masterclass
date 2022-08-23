let queue = [];
queue.push("first");
queue.push("second");
queue.push("third");
// remove from beginning
queue.shift(); // first
queue.shift(); // second
queue.shift(); // third

queue = [];
queue.unshift("first");
queue.unshift("second");
queue.unshift("third");
// remove from end
queue.pop() // first
queue.pop() // second
queue.pop() // third

// queue singly linked list implementation
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {

    }

    dequeue() {
        
    }
}