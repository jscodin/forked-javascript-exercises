const findTheOldest = function(people) {
  const oldest = people.sort(function(a, b) {
    const currentYear = new Date().getFullYear();

    const calculateAge = function(person) {
      const deathYear = person.yearOfDeath || currentYear;
      return deathYear - person.yearOfBirth;
    };
    const lastP = calculateAge(a);
    const nextP = calculateAge(b);
    return lastP > nextP ? -1 : 1;
  });
  console.log(oldest[0]);
  return oldest[0];

};

/* correct solution
 
const findTheOldest = function (array) {
// using return at the beginning immediately returns the value once function 
// has ran. Reduce takes array and finally returns one value once callback 
// fn has finished.
// The way reduce works here is, the accumulator (1st param) starts with Ray,
// because no initial value is set, otherwise it would have been Carly.
// It then runs through the rest of the
// fucntion. Runs the getAge function and gets rays year of birth 
// and year of death and stores this in oldestAge variable.
// Then moves on to the second paramaeter and chooses Jane, and once again
// runs the getAge function etc. 
// (Using last test as example) Finally it then compares Ray to Jane (oldestAge > currentAge), decides
// ray should become "oldest", this is because left of : gets returned if statement is true.
// REMEMBER that currentPerson is Ray and that is why they are now put into accumulator
// section of the callbackFn.
// return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

*/



// Do not edit below this line
module.exports = findTheOldest;
