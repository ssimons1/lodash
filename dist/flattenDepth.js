'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseFlatten = require('./.internal/baseFlatten.js');

var _baseFlatten2 = _interopRequireDefault(_baseFlatten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Recursively flatten `array` up to `depth` times.
 *
 * @since 4.4.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 * @see flatMap, flatMapDeep, flatMapDepth, flattenDeep
 * @example
 *
 * const array = [1, [2, [3, [4]], 5]]
 *
 * flattenDepth(array, 1)
 * // => [1, 2, [3, [4]], 5]
 *
 * flattenDepth(array, 2)
 * // => [1, 2, 3, [4], 5]
 */
function flattenDepth(array, depth) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  depth = depth === undefined ? 1 : +depth;
  return (0, _baseFlatten2.default)(array, depth);
}

exports.default = flattenDepth;

//# sourceMappingURL=flattenDepth.js.map