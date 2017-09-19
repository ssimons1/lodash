"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1;
  var result = new Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

exports.default = mapToArray;

//# sourceMappingURL=mapToArray.js.map