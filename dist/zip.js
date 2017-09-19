'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _unzip = require('./unzip.js');

var _unzip2 = _interopRequireDefault(_unzip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of grouped elements, the first of which contains the
 * first elements of the given arrays, the second of which contains the
 * second elements of the given arrays, and so on.
 *
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to process.
 * @returns {Array} Returns the new array of grouped elements.
 * @see unzip, unzipWith, zipObject, zipObjectDeep, zipWith
 * @example
 *
 * zip(['a', 'b'], [1, 2], [true, false])
 * // => [['a', 1, true], ['b', 2, false]]
 */
function zip() {
  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  return (0, _unzip2.default)(arrays);
}

exports.default = zip;

//# sourceMappingURL=zip.js.map