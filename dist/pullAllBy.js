'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basePullAll = require('./.internal/basePullAll.js');

var _basePullAll2 = _interopRequireDefault(_basePullAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `pullAll` except that it accepts `iteratee` which is
 * invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared. The iteratee is invoked with one argument: (value).
 *
 * **Note:** Unlike `differenceBy`, this method mutates `array`.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns `array`.
 * @see pull, pullAll, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }]
 *
 * pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x')
 * console.log(array)
 * // => [{ 'x': 2 }]
 */
function pullAllBy(array, values, iteratee) {
  return array != null && array.length && values != null && values.length ? (0, _basePullAll2.default)(array, values, iteratee) : array;
}

exports.default = pullAllBy;

//# sourceMappingURL=pullAllBy.js.map