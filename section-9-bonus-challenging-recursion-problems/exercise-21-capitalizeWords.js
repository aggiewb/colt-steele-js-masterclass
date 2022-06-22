// Write a recursive function called capitalizeWords. Given an array of words
// return a new array containing each word capitalized.

function capitalizeWords (arr) {
    const value = arr[0];
    const uppercaseValue = value.toUpperCase();
    if (arr.length === 1) {
        return uppercaseValue;
    }
    return [uppercaseValue].concat(capitalizeWords(arr.slice(1)));
}