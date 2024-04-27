const repeatString = function (text, timesToRepeat) {
  if (timesToRepeat < 0) return `ERROR`;
  let result = ``;
  for (let i = 0; i < timesToRepeat; i++) {
    result = result + text;
  }
  return result;
};
// Do not edit below this line
module.exports = repeatString;
