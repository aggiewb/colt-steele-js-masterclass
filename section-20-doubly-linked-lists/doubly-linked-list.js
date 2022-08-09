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
        if (!this.tail) {
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

    unshift(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.previous = node;
            node.next = this.head;
            this.head = node;
        }

        length++;
        return this;
    }
    
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        const halfLength = Math.ceil(this.length / 2);
        if (index <= halfLength) {
            let currentNode = this.head;
            for (let i = 0; i <= halfLength; i++) {
                currentNode = currentNode.next;
                if(i === index) {
                    return currentNode;
                }
            }
        } else {
            let currentNode = this.tail;
            for (let i = this.length - 1; i > halfLength; i--) {
                currentNode = currentNode.previous;
                if(i === index) {
                    return currentNode;
                }
            }
        }
    }
}