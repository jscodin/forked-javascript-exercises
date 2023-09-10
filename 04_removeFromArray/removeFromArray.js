const removeFromArray = function() {

  /* Psuedocode
  - function should accept an array 
  and as many arguments as necessary: done
  - function should then be able to know which arguments
  need removing from array
  - function should then remove the additonal arguments from
  the array
  - then return the new array without the removed arguments */
  const filteredArr = array.filter(item => !args.includes(item))

  console.log(array, filteredArr);
  return filteredArr;

};


// Do not edit below this line
module.exports = removeFromArray;
