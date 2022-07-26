function getDigit(num, digit) {
    return Math.floor(
        Math.abs(num) / Math.pow(10, digit) 
        % 10);
}

function digitCount(num) {
    return Math.floor(
        Math.log10(Math.abs(num)) + 1);
}

function mostDigits(arr) {
    let highestDigitCount = 0;
    for (let i = 0; i < arr.length; i++) {
        highestDigitCount = Math.max(digitCount(arr[i]), highestDigitCount);
    }
    return highestDigitCount;
}

function radixSort(arr) {
    const maxDigitCount = mostDigits(arr);
  
    for (let i = 0; i < maxDigitCount; i++) {
      const digitBuckets = [];
      arr.forEach(num => {
        const currDigit = getDigit(num, i);
        if (Array.isArray(digitBuckets[currDigit])) {
          digitBuckets[currDigit].push(num);
        } else {
           digitBuckets[currDigit] = [num];
        }
      });
      arr = digitBuckets.flat();
    }
    return arr;
}