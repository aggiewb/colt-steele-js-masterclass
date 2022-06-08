// Write a function called minSubArrayLen which accepts two parameters- an 
// array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of
// which the sum is greater than or equal to the integer passed to the
// function. If there isn't one, return 0 instead.

// Time Complexity - O(N) : Space Complexity - O(1)

function minSubArrayLen(nums, sum) {
    let [total, i, j] = [0, 0, 0];
    let minLen = nums.length + 1;

    while (i < nums.length) {
        if (total < sum && j < nums.length) {
            total += nums[j];
            j++;
        } else if (total >= sum) {
            total -= nums[i];
            minLen = Math.min(minLen, j - i);
            i++; 
        } else if (j === nums.length) {
            break;
        }
    }
    return minLen > nums.length ? 0 : minLen;
}