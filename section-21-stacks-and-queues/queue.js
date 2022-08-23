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

    // similar to push O(1)
    enqueue(value) {
        const node = new Node(value);

        if(!this.first) {
            this.first = node;
            this.last = this.first;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }

    // similar to shift O(1)
    dequeue() {
        if (!this.first) {
            return null;
        }

        const firstNode = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return firstNode.value;
    }
}