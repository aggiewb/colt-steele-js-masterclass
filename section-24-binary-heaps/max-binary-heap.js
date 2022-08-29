class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (this.values[parentIndex] < this.values[index]) {
            let temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[index];
            this.values[index] = temp;
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
        return this.values.length;
    }
}