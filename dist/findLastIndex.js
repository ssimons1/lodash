'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseFindIndex = require('./.internal/baseFindIndex.js');

var _baseFindIndex2 = _interopRequireDefault(_baseFindIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @see find, findIndex, findKey, findLast, findLastKey
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * findLastIndex(users, ({ user }) => user == 'pebbles')
 * // => 2
 */
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length - 1;
  if (fromIndex !== undefined) {
    index = fromIndex < 0 ? Math.max(length + fromIndex, 0) : Math.min(fromIndex, length - 1);
  }
  return (0, _baseFindIndex2.default)(array, predicate, index, true);
}

exports.default = findLastIndex;

//# sourceMappingURL=findLastIndex.js.map