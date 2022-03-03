const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let str1 = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else
    if (str[i] !== str[i + 1]) {
      if (count !== 1) {
        str1 += count + str[i];
        count = 1;
      } else 
      {
        str1 += str[i];
      }
    }
  }
  return str1;
}

module.exports = {
  encodeLine
};
