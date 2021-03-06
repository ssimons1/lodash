"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A specialized version of `indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1;
  var length = array.length;


  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

exports.default = strictIndexOf;

//# sourceMappingURL=strictIndexOf.js.map