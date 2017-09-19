'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basePullAll = require('./.internal/basePullAll.js');

var _basePullAll2 = _interopRequireDefault(_basePullAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `pull` except that it accepts an array of values to remove.
 *
 * **Note:** Unlike `difference`, this method mutates `array`.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @returns {Array} Returns `array`.
 * @see pull, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const array = ['a', 'b', 'c', 'a', 'b', 'c']
 *
 * pullAll(array, ['a', 'c'])
 * console.log(array)
 * // => ['b', 'b']
 */
function pullAll(array, values) {
  return array != null && array.length && values != null && values.length ? (0, _basePullAll2.default)(array, values) : array;
}

exports.default = pullAll;

//# sourceMappingURL=pullAll.js.map