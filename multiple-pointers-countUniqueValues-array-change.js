// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted. The original array CAN be modified. 
function countUniqueValues(arr) {
    const arrLength = arr.length;
    if (arrLength === 0) {
      return 0;
    }
    
    let i = 0;
    let j = i + 1;
  
    while(j <= arrLength - 1) {
      if (arr[i] !== arr[j]) {
          i++;
          arr[i] = arr[j];
        }
        j++;
    }
    return i + 1;
}