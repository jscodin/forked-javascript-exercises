const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;

};

const sum = function(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
};

const multiply = function(...args) {
  let total = 1;
  for (let i = 0; i < args.length; i++) {
    total = total *= args[i];
  }
  return total;
};

const power = function(x, y) {
  return x ** y;

};

const factorial = function(num) {
  let result = num;
  if (num === 1 || num === 0) {
    return 1;
  }
  while (num > 1) {
    num--;
    result = result * num;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
