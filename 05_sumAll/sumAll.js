const sumAll = function(num1, num2) {
  //psuedocode
  // - get 2 integers from user input
  // - add 1st integer to the next integer inbetween the 2 inputs and so on..
  let sum = 0;

  for (let i = num1; i <= num2; i++) {
    let num = i;
    let total = sum + num;
    console.log(num);
    console.log(total);
  };

  // return sum;

};

// Do not edit below this line
module.exports = sumAll;
