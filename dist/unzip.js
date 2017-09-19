'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filter = require('./filter.js');

var _filter2 = _interopRequireDefault(_filter);

var _map = require('./map.js');

var _map2 = _interopRequireDefault(_map);

var _baseProperty = require('./.internal/baseProperty.js');

var _baseProperty2 = _interopRequireDefault(_baseProperty);

var _isArrayLikeObject = require('./isArrayLikeObject.js');

var _isArrayLikeObject2 = _interopRequireDefault(_isArrayLikeObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `zip` except that it accepts an array of grouped
 * elements and creates an array regrouping the elements to their pre-zip
 * configuration.
 *
 * @since 1.2.0
 * @category Array
 * @param {Array} array The array of grouped elements to process.
 * @returns {Array} Returns the new array of regrouped elements.
 * @see unzipWith, zip, zipObject, zipObjectDeep, zipWith
 * @example
 *
 * const zipped = zip(['a', 'b'], [1, 2], [true, false])
 * // => [['a', 1, true], ['b', 2, false]]
 *
 * unzip(zipped)
 * // => [['a', 'b'], [1, 2], [true, false]]
 */
function unzip(array) {
  if (!(array != null && array.length)) {
    return [];
  }
  var length = 0;
  array = (0, _filter2.default)(array, function (group) {
    if ((0, _isArrayLikeObject2.default)(group)) {
      length = Math.max(group.length, length);
      return true;
    }
  });
  var index = -1;
  var result = new Array(length);
  while (++index < length) {
    result[index] = (0, _map2.default)(array, (0, _baseProperty2.default)(index));
  }
  return result;
}

exports.default = unzip;

//# sourceMappingURL=unzip.js.map