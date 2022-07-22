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

  function getDigits(num) {
    // number representing the largest integer less than or equal to the specified number
    return Math.floor(
      // to what exponent is returned with a base of 10
      Math.log10(num)
      // need to add one to the digits place of the exponent returned
    ) + 1;
  }