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
        const valuesLastIndex = this.values.length - 1;
        [this.values[0], this.values[valuesLastIndex]] = 
        [this.values[valuesLastIndex], this.values[0]];
        const max = this.values.pop();
        let rootValue = this.values[0];

        let i = 0;
        let j = i;
        let leftChild = this.values[(2 * i) + 1];
        let rightChild = this.values[(2 * j) + 2];
        let hasSwapped = false;
      
        while (leftChild || rightChild) {
            if (leftChild > rootValue) {
                [this.values[i], this.values[leftChild]] = 
                [this.values[leftChild], this.values[i]];
                hasSwapped = true;
                i = (2 * i) + 1;
            } 
            if ((rightChild > rootValue && !hasSwapped) ||
                (rightChild > leftChild && hasSwapped)) {
                [this.values[j], this.values[rightChild]] = 
                [this.values[rightChild], this.values[j]];
                i, j = (2 * j) + 2;
                rightChild = this.values[i];
            }
            if (rightChild < leftChild && hasSwapped) {
                j = i;
                leftChild = this.values[i];
            }
            else {
                break;
            }
            hasSwapped = false;
            // TODO: This value is not being set correctly
            rootValue = this.values[i];
        }
        return max;
    }
}