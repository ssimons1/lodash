'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseWhile = require('./.internal/baseWhile.js');

var _baseWhile2 = _interopRequireDefault(_baseWhile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a slice of `array` excluding elements dropped from the beginning.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * dropWhile(users, ({ active }) => active)
 * // => objects for ['pebbles']
 */
function dropWhile(array, predicate) {
  return array != null && array.length ? (0, _baseWhile2.default)(array, predicate, true) : [];
}

exports.default = dropWhile;

//# sourceMappingURL=dropWhile.js.map