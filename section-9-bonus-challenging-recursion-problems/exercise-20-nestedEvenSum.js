// Write a recursive function called nestedEvenSum. Return the sum of all even numbers
// in an object which may contain nested objects.

function nestedEvenSum (obj) {
    let sum = 0;
    for (const item in obj) {
        const itemValue = obj[item];
        if (typeof itemValue === "object") {
            sum += nestedEvenSum(itemValue);
            
        }
        else if (typeof itemValue === "number" && itemValue % 2 === 0) {
            sum += itemValue; 
        }
        
    }
    return sum;
}