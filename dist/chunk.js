'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slice = require('./slice.js');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size) {
  size = Math.max(size, 0);
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0;
  var resIndex = 0;
  var result = new Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = (0, _slice2.default)(array, index, index += size);
  }
  return result;
}

exports.default = chunk;

//# sourceMappingURL=chunk.js.map