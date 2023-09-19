const sumAll = function(num1, num2) {
  let sum = 0;


  if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
      sum = sum + i;
    }
  } else {
    for (let i = num1; i <= num2; i++) {
      sum = sum + i;
    }
  }
  /* if (num1 || num2 < 0) {
    return "ERROR";
  }
  else if (isNaN(num1 || num2)) {
  } */
  return sum;
}

// Do not edit below this line
module.exports = sumAll;
