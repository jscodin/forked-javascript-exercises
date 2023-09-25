const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;

};

const sum = function() {

};

const multiply = function(...args) {
  let total = 1;
  for (let i = 0; i < args.length; i++) {
    total = total *= args[0];
  }
  return total;
};

const power = function(x, y) {
  return x ** y;

};

const factorial = function() {

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
