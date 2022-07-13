// Big O Complexity is O(N^2). This could have some efficiency in writes to memory with only one swap at the end of each loop.
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                lowest = j;
            }
        }
        if (lowest !== i) {
            swap(arr, i, lowest);
        }
    }
    return arr;
}

function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}