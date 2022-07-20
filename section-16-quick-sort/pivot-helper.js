function pivot(arr, start = 0, end = arr.length - 1) {
    const pivot = arr[start];
    let swapIndex = start;

    for (let i = 1; i <= end; i++) {
        if (pivot > arr[i]) {
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