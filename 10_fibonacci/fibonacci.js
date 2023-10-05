const fibonacci = function(num) {

  let fib = [0, 1];

  if (num < 0) {
    return "OOPS";
  } else {
    for (let i = 2; i <= num; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
      console.log(fib);
      console.log(fib[num]);
    }
  }
  return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
