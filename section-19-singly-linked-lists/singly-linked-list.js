class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        
        let current = this.head;

        if (this.length === 1) {
            this.head = null; 
            this.tail = null;
        } else {
            let previous = null;
            while(current.next) {
                previous = current;
                current = current.next;
            }
            this.tail = previous;
            this.tail.next = null;
        }

        this.length--;
        return current;
    }
}