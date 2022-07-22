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