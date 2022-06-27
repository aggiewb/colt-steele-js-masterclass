// Write a function called collectStrings which accepts an object and returns an array
// of all the values in the object that have a typeof string.

function collectStrings(obj){
    let strArr = [];

    for (const prop in obj) {
        const propType = typeof obj[prop];

        if (propType === 'string') {
            strArr.push(obj[prop]);
        } else if (propType === 'object') {
            strArr = strArr.concat(collectStrings(obj[prop]));
        }
    }
    return strArr;
}