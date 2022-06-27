// Write a function called stringifyNumbers which takes in an object and finds all of the
// values which are numbers and converts them to strings. Recursion would be a great way
// to solve this! Do not mutate original array.

function stringifyNumbers(obj){
    const newObj = {};

    for (const prop in obj) {
        const propType = typeof obj[prop];

        if (propType === 'object' && !Array.isArray(obj[prop])) {
            newObj[prop] = stringifyNumbers(obj[prop]);
        } else if (propType === 'number') {
            newObj[prop] = `${obj[prop]}`;
        } else {
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}