const getTheTitles = function(select) {

  /* let result = select.map(({ title }) => title);
  console.log(result); */

  const result = select.map((x) => x.title);
  return result;


};

// Do not edit below this line
module.exports = getTheTitles;
