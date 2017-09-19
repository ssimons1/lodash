"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

/**
 * Gets all but the first element of `array`.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * tail([1, 2, 3])
 * // => [2, 3]
 */
function tail(array) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }

  var _array = _toArray(array),
      head = _array[0],
      result = _array.slice(1);

  return result;
}

exports.default = tail;

//# sourceMappingURL=tail.js.map