const leapYears = function(year) {
  /* psuedocode
  - user inputs year
  - function takes input and checks if it is divisable
    by 4, if so potentially a leap year
  - function also takes input and checks if it is divisable by 100, if so not a leap year, unless also
  divisable by 400
  */
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}
// Do not edit below this line
module.exports = leapYears;
