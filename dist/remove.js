'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basePullAt = require('./.internal/basePullAt.js');

var _basePullAt2 = _interopRequireDefault(_basePullAt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 *
 * **Note:** Unlike `filter`, this method mutates `array`. Use `pull`
 * to pull elements from an array by value.
 *
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, reject, filter
 * @example
 *
 * const array = [1, 2, 3, 4]
 * const evens = remove(array, n => n % 2 == 0)
 *
 * console.log(array)
 * // => [1, 3]
 *
 * console.log(evens)
 * // => [2, 4]
 */
function remove(array, predicate) {
  var result = [];
  if (!(array != null && array.length)) {
    return result;
  }
  var index = -1;
  var indexes = [];
  var length = array.length;


  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
      indexes.push(index);
    }
  }
  (0, _basePullAt2.default)(array, indexes);
  return result;
}

exports.default = remove;

//# sourceMappingURL=remove.js.map