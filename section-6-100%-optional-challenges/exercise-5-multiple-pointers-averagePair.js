// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the
// target average. There may be more than one pair that matches the average target.

// Bonus constraints - Time: O(N) Space: O(1)

function averagePair(arr, targetAvg){
    let start = 0;
    let end = arr.length - 1;
    
    while (start < end) {
        const testPairAvg = (arr[start] + arr[end]) / 2;
        if (testPairAvg === targetAvg) {
            return true;
        } else if (testPairAvg < targetAvg) {
            start++;
        } else {
            end--;
        }
    }
    return false;
}