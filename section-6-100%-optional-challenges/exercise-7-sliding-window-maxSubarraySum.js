// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed
// to the function.

// Note that a subarray must consist of consecutive elements from the original array.
// Constraints: Time Complexity - O(N) Space Complexity - O(1)

function maxSubarraySum(arr, subArrLen){
    if (subArrLen > arr.length) {
        return null;
    }
    
    let maxSubarrSum = 0;
    
    for (let i = 0; i < subArrLen; i++) {
        maxSubarrSum += arr[i];
    }
    
    let tempSum = maxSubarrSum;
    
    for (let i = subArrLen; i < arr.length; i++) {
        tempSum += arr[i] - arr[i - subArrLen];
        maxSubarrSum = Math.max(maxSubarrSum, tempSum);
    }
    
    return maxSubarrSum;
}