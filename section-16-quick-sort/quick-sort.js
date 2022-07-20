function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function pivot(arr, start = Math.floor(arr.length - 1) / 2, end = arr.length - 1) {
    let swapIndex = start;
    const pivot = arr[0];
    for (let i = 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            swap(arr, i, swapIndex);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

function swap(arr, first, second) {
    [arr[first], arr[second]] = [arr[second], arr[first]];
}