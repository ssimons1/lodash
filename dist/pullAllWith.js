'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basePullAll = require('./.internal/basePullAll.js');

var _basePullAll2 = _interopRequireDefault(_basePullAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `pullAll` except that it accepts `comparator` which
 * is invoked to compare elements of `array` to `values`. The comparator is
 * invoked with two arguments: (arrVal, othVal).
 *
 * **Note:** Unlike `differenceWith`, this method mutates `array`.
 *
 * @since 4.6.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 * @see pull, pullAll, pullAllBy, pullAt, remove, reject
 * @example
 *
 * const array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }]
 *
 * pullAllWith(array, [{ 'x': 3, 'y': 4 }], isEqual)
 * console.log(array)
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
 */
function pullAllWith(array, values, comparator) {
  return array != null && array.length && values != null && values.length ? (0, _basePullAll2.default)(array, values, undefined, comparator) : array;
}

exports.default = pullAllWith;

//# sourceMappingURL=pullAllWith.js.map