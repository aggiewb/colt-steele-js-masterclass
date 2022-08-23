let stack = [];
// adding to end, and removing from the end
stack.push("a");
stack.push("little");
stack.push("example");
stack.pop(); // example
stack.pop(); // little
stack.pop(); // a

stack = [];
// adding to beginning, and removing from the beginning
stack.unshift("another");
stack.unshift("stack");
stack.unshift("example");
stack.shift(); // example
stack.shift(); // stack
stack.shift(); // another

// stack singly linked list implementation
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // adding to the beginning O(N)
    push(value) {
        const node = new Node(value);

        if (!this.first) {
            this.first = node;
            this.last = this.first;
        } else {
            const currentFirst = this.first;
            this.first = node;
            this.first.next = currentFirst;
        }
        return ++this.size;
    }

    // removing from the beginning O(N)
    pop() {
        if (!this.first) {
            return null;
        }

        const firstNode = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return lastNode.value;
    }
}