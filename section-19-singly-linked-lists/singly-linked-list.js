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

    shift() {
        if(!this.head) {
            return undefined;
        }

        const removedHead = this.head;

        if(this.length === 1) {
            this.tail = null;
        }
        this.head = removedHead.next;
        this.length--;
        return removedHead;
    }

    unshift(value) {
        const node = new Node(value);
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current = this.head;
        let i = 0;
        while (index !== i) {
          current = current.next;
          i++;
        }
        return current;
    }

    set(index, value) {
        const foundNode = this.get(index);
        if(foundNode) {
          node.value = value;
          return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        } 
        else if (index === 0) {
            this.unshift(value);
        }
        else if (index === this.length) {
            this.push(value);
        }
        else {
            const node = new Node(value);
            node.next = this.get(index);
            const prevNode = this.get(index - 1);
            prevNode.next = node;
        }
        this.length++;
        return true;
    }

    remove(index) {
        if (index >= this.length || index < 0) {
            return null;
        }
        else if (index === 0) {
            return this.shift();
        }
        else if (index === this.length - 1) {
            return this.pop();
        }
        else {
            const removedNode = this.get(index);
            this.get(index - 1).next = removedNode.next;
            this.length--;
            return removedNode;
        }
    }
}