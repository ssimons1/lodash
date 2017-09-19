'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseFindIndex = require('./.internal/baseFindIndex.js');

var _baseFindIndex2 = _interopRequireDefault(_baseFindIndex);

var _baseIsNaN = require('./.internal/baseIsNaN.js');

var _baseIsNaN2 = _interopRequireDefault(_baseIsNaN);

var _strictLastIndexOf = require('./.internal/strictLastIndexOf.js');

var _strictLastIndexOf2 = _interopRequireDefault(_strictLastIndexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `indexOf` except that it iterates over elements of
 * `array` from right to left.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * lastIndexOf([1, 2, 1, 2], 2)
 * // => 3
 *
 * // Search from the `fromIndex`.
 * lastIndexOf([1, 2, 1, 2], 2, 2)
 * // => 1
 */
function lastIndexOf(array, value, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length;
  if (fromIndex !== undefined) {
    index = index < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1);
  }
  return value === value ? (0, _strictLastIndexOf2.default)(array, value, index) : (0, _baseFindIndex2.default)(array, _baseIsNaN2.default, index, true);
}

exports.default = lastIndexOf;

//# sourceMappingURL=lastIndexOf.js.map