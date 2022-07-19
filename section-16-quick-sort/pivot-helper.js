function pivot(arr, left = 0, right = arr.length - 1) {
    const pivot = arr[start];
    let swapIndex = 0;

    for (let i = 1; i < arr.length; i++) {
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