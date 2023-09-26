const palindromes = function(str) {

  let reg = /[\W]/g; // used later to remove unwanted characters.
  let lowRegStr = str.toLowerCase().replace(reg, ""); // replaces unwanted characters with no space
  let reverseStr = lowRegStr.split("").reverse().join(""); // reverses the string, now with no spaces
  return reverseStr === lowRegStr; // now both strings are in same format to be compared

};

// Do not edit below this line
module.exports = palindromes;
