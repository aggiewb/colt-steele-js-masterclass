// Write a function called sameFrequency. Given two integers, find out if the two
// numbers have the same frequency of digits.

// Your solution MUST have the following complexities.
// Time: O(N)

function sameFrequency(num1, num2) {
    const num1Str = `${num1}`;
    const num2Str = `${num2}`;

    if (num1Str.length !== num2Str.length) {
        return false;
    }

    const num1StrObj = {};

    for (const digitStr of num1Str) {
        num1StrObj[digitStr] = (num1StrObj[digitStr] || 0) + 1;
    }

    for (const digitStr of num2Str) {
        if (!num1StrObj[digitStr]) {
            return false;
        } else {
            num1StrObj[digitStr]--; 
        }
    }

    return true;
}