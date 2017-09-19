'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _unzipWith = require('./unzipWith.js');

var _unzipWith2 = _interopRequireDefault(_unzipWith);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `zip` except that it accepts `iteratee` to specify
 * how grouped values should be combined. The iteratee is invoked with the
 * elements of each group: (...group).
 *
 * @since 3.8.0
 * @category Array
 * @param {...Array} [arrays] The arrays to process.
 * @param {Function} iteratee The function to combine
 *  grouped values.
 * @returns {Array} Returns the new array of grouped elements.
 * @see unzip, unzipWith, zip, zipObject, zipObjectDeep, zipWith
 * @example
 *
 * zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c)
 * // => [111, 222]
 */
function zipWith() {
  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  var length = arrays.length;
  var iteratee = length > 1 ? arrays[length - 1] : undefined;
  iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
  return (0, _unzipWith2.default)(arrays, iteratee);
}

exports.default = zipWith;

//# sourceMappingURL=zipWith.js.map