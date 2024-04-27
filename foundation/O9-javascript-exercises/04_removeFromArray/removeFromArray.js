const removeFromArray = function (array, ...argument) {
  return array.filter((item) => !argument.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
