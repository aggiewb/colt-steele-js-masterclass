// Write a recursive function called capitalizeFirst. Given an array of strings, 
// capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
    const value = arr[0];
    const capitalizeValue = [value[0].toUpperCase() + value.slice(1)];
    if (arr.length === 1) {
        return capitalizeValue;
    }
    return capitalizeValue.concat(capitalizeFirst(arr.slice(1)));
}