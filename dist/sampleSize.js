'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _copyArray = require('./.internal/copyArray.js');

var _copyArray2 = _interopRequireDefault(_copyArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets `n` random elements at unique keys from `array` up to the
 * size of `array`.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to sample.
 * @param {number} [n=1] The number of elements to sample.
 * @returns {Array} Returns the random elements.
 * @example
 *
 * sampleSize([1, 2, 3], 2)
 * // => [3, 1]
 *
 * sampleSize([1, 2, 3], 4)
 * // => [2, 3, 1]
 */
function sampleSize(array, n) {
  var length = array == null ? 0 : array.length;
  if (!length || n < 1) {
    return [];
  }
  n = n > length ? length : n;
  var index = -1;
  var lastIndex = n - 1;
  var result = (0, _copyArray2.default)(array);
  while (++index < n) {
    var rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    var value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  return result;
}

exports.default = sampleSize;

//# sourceMappingURL=sampleSize.js.map