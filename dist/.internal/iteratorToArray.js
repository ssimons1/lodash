"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
function iteratorToArray(iterator) {
  var data = void 0;
  var result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }
  return result;
}

exports.default = iteratorToArray;

//# sourceMappingURL=iteratorToArray.js.map