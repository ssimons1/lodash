'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('./map.js');

var _map2 = _interopRequireDefault(_map);

var _baseAt = require('./.internal/baseAt.js');

var _baseAt2 = _interopRequireDefault(_baseAt);

var _basePullAt = require('./.internal/basePullAt.js');

var _basePullAt2 = _interopRequireDefault(_basePullAt);

var _compareAscending = require('./.internal/compareAscending.js');

var _compareAscending2 = _interopRequireDefault(_compareAscending);

var _isIndex = require('./.internal/isIndex.js');

var _isIndex2 = _interopRequireDefault(_isIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes elements from `array` corresponding to `indexes` and returns an
 * array of removed elements.
 *
 * **Note:** Unlike `at`, this method mutates `array`.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...(number|number[])} [indexes] The indexes of elements to remove.
 * @returns {Array} Returns the new array of removed elements.
 * @see pull, pullAll, pullAllBy, pullAllWith, remove, reject
 * @example
 *
 * const array = ['a', 'b', 'c', 'd']
 * const pulled = pullAt(array, [1, 3])
 *
 * console.log(array)
 * // => ['a', 'c']
 *
 * console.log(pulled)
 * // => ['b', 'd']
 */
function pullAt(array) {
  var length = array == null ? 0 : array.length;

  for (var _len = arguments.length, indexes = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    indexes[_key - 1] = arguments[_key];
  }

  var result = (0, _baseAt2.default)(array, indexes);

  (0, _basePullAt2.default)(array, (0, _map2.default)(indexes, function (index) {
    return (0, _isIndex2.default)(index, length) ? +index : index;
  }).sort(_compareAscending2.default));
  return result;
}

exports.default = pullAt;

//# sourceMappingURL=pullAt.js.map