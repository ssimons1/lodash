'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('./map.js');

var _map2 = _interopRequireDefault(_map);

var _unzip = require('./unzip.js');

var _unzip2 = _interopRequireDefault(_unzip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `unzip` except that it accepts `iteratee` to specify
 * how regrouped values should be combined. The iteratee is invoked with the
 * elements of each group: (...group).
 *
 * @since 3.8.0
 * @category Array
 * @param {Array} array The array of grouped elements to process.
 * @param {Function} iteratee The function to combine
 *  regrouped values.
 * @returns {Array} Returns the new array of regrouped elements.
 * @example
 *
 * const zipped = zip([1, 2], [10, 20], [100, 200])
 * // => [[1, 10, 100], [2, 20, 200]]
 *
 * unzipWith(zipped, add)
 * // => [3, 30, 300]
 */
function unzipWith(array, iteratee) {
  if (!(array != null && array.length)) {
    return [];
  }
  var result = (0, _unzip2.default)(array);
  return (0, _map2.default)(result, function (group) {
    return iteratee.apply(undefined, group);
  });
}

exports.default = unzipWith;

//# sourceMappingURL=unzipWith.js.map