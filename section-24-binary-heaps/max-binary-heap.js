class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (this.values[parentIndex] < this.values[index]) {
            const temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[index];
            this.values[index] = temp;
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
        return this.values.length;
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        const valuesLength = this.values.length;

        if (valuesLength === 1) {
            this.values = [];
            return max;
        }
        this.values[0] = end;

        let index = 0;
        let element = this.values[index];
        let hasBubbledDown = true;
        
        while (hasBubbledDown) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let indexToSwap = null;
            let leftChild, rightChild = null;

            if (leftChildIndex < valuesLength) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    indexToSwap = leftChildIndex;
                }
            }

            if (rightChildIndex < valuesLength) {
                rightChild = this.values[rightChildIndex];
                if (
                    (indexToSwap === null && rightChild > element) ||
                    (indexToSwap !== null && rightChild > leftChild)
                ) {
                    indexToSwap = rightChildIndex;
                }
            }
         
            if (indexToSwap === null) {
                hasBubbledDown = false;
            } else {
                this.values[index] = this.values[indexToSwap];
                this.values[indexToSwap] = element;
                index = indexToSwap;
            }
        }
        return max;
    }
}