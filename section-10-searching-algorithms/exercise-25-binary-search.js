function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.round(right / 2);
    
    while (left <= right) {
       if (arr[middle] === target) {
           return middle;
       } else if (arr[middle] < target) {
           left = middle + 1;
       } else {
           right = middle - 1;
       }
       middle = Math.round((right + left) / 2);
    }
    return -1;
}