class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        if(!this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.tail) {
            return undefined;
        }

        const lastNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = lastNode.previous;
            this.tail.next = null;
            lastNode.previous = null;
        }

        this.length--;
        return lastNode;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        const firstNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = firstNode.next;
            this.head.previous = null;
            firstNode.next = null;
        }
        length--;
        return firstNode;
    }
}