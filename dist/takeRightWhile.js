'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseWhile = require('./.internal/baseWhile.js');

var _baseWhile2 = _interopRequireDefault(_baseWhile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a slice of `array` with elements taken from the end. Elements are
 * taken until `predicate` returns falsey. The predicate is invoked with
 * three arguments: (value, index, array).
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * takeRightWhile(users, ({ active }) => active)
 * // => objects for ['fred', 'pebbles']
 */
function takeRightWhile(array, predicate) {
  return array != null && array.length ? (0, _baseWhile2.default)(array, predicate, false, true) : [];
}

exports.default = takeRightWhile;

//# sourceMappingURL=takeRightWhile.js.map