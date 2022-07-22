function getDigit(num, digit) {
    // number representing the largest integer less than or equal to the specified number
    return Math.floor(
      // non negative number
      Math.abs(num) /
      // which place value to divide number by
      Math.pow(10, digit)
      // the ones place of the remainder of the division
      % 10);
  }

  function digitCount(num) {
    //  the base 10 logarithm of 0 is -Infinity
    if (num === 0) {
      return 1;
    }
    // number representing the largest integer less than or equal to the specified number
    return Math.floor(
      // the number that is returned if the exponent is the num
      Math.log10(Math.abs(num))
      // need to add one to the digits place of the exponent returned
    ) + 1;
  }

  function mostDigits(nums) {
    let mostDigitCounter = 0;
    nums.forEach(num => {
      const currentDigetCount = digitCount(num);
      if(currentDigetCount > mostDigitCounter) {
        mostDigitCounter = currentDigetCount;
      }
    });
    return mostDigitCounter;
  }