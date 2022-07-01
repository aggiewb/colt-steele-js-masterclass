// Big O for nearly sorted array would be linear O(N). However if not, big O would be O(N^2).
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        const isSwap = false;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                isSwap = true;
            }
        }
        if (!isSwap) {
            break;
        }
    }
}

function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}