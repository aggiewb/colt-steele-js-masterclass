// Implement a function called, areThereDuplicates, which accepts a variable number of
// arguments, and checks whether there are any duplicates among the arguments passed in.
// This implementation will need to use a multiple pointers pattern.
// Time: O(n log n) Space: O(n)
function areThereDuplicates(...args) {
    const sortedArr = [...args].sort();
    let j = 1;
   
    for (let i = 0; i < args.length; i++) {
        if(sortedArr[i] === sortedArr[j]) {
            return true;
        } else {
            j++;
        }
    }
    return false;
}

// One line solution
function areThereDuplicates(...args) {
    return new Set(args).size !== args.length;
}