class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if (this.root === null) {
            this.root = node;
        } else {
            let currentNode = this.root;
            let isValueLess = value < currentNode.value;
            let hasNextNode = isValueLess ? currentNode.left !== null : currentNode.right !== null;
            while (hasNextNode) {
                if (currentNode.value === value) {
                    return undefined;
                }
                currentNode = isValueLess ? currentNode.left : currentNode.right;
                isValueLess = value < currentNode.value;
                hasNextNode = isValueLess ? currentNode.left !== null : currentNode.right !== null;
            }
            if (isValueLess) {
                currentNode.left = node;
            } else {
                currentNode.right = node;
            }
        }
        return this; 
    }

    find(value) {
        let hasFoundNode = false;
        if (this.root !== null) {
            let currentNode = this.root;
            let isValueLess = value < currentNode.value;
            let hasNextNode = isValueLess ? currentNode.left !== null : currentNode.right !== null;
            while (hasNextNode) {
                if (currentNode.value === value) {
                    hasFoundNode = true;
                    break;
                }
                currentNode = isValueLess ? currentNode.left : currentNode.right;
                isValueLess = value < currentNode.value;
                hasNextNode = isValueLess ? currentNode.left !== null : currentNode.right !== null;
            }
            if (currentNode.value === value) {
                hasFoundNode = true;
            }
        }
        return hasFoundNode; 
    }

    breadthFirstSearch() {
        let node = this.root;
        const queue = [node];
        const visited = [];

        while(queue.length) {
            node = queue.shift();
            visited.push(node.value);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        return visited;
    }

    traverse(node, arr) {
        arr.push(node.value);

        if(node.left) {
            this.traverse(node.left, arr);
        }
        if(node.right) {
            this.traverse(node.right, arr);
        }
    }

    depthFirstSearchPreorder() {
        const visited = [];
        const traverse = node => {
            visited.push(node.value);
    
            if(node.left) {
                traverse(node.left);
            }
            if(node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return visited;
    }
}