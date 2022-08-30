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
        let leftChild = this.values[(2 * i) + 1];
        let rightChild = this.values[(2 * i) + 2];
        let hasSwapped = false;
        
        // TODO: Write while loop contents
        while (leftChild || rightChild) {
        }
    }
}