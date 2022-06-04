// Implement a function called, areThereDuplicates, which accepts a variable number of
// arguments, and checks whether there are any duplicates among the arguments passed in.
// This implementation will need to use a frequency counter pattern.

function areThereDuplicates(...args) {
    const argsCounter = {};
    for (let i = 0; i < args.length; i++) {
        if (argsCounter[args[i]]) {
           return true; 
        } else {
           argsCounter[args[i]] = 1; 
        }
    }
    return false;
}