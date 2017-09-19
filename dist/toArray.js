'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _copyArray = require('./.internal/copyArray.js');

var _copyArray2 = _interopRequireDefault(_copyArray);

var _getTag = require('./.internal/getTag.js');

var _getTag2 = _interopRequireDefault(_getTag);

var _isArrayLike = require('./isArrayLike.js');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isString = require('./isString.js');

var _isString2 = _interopRequireDefault(_isString);

var _iteratorToArray = require('./.internal/iteratorToArray.js');

var _iteratorToArray2 = _interopRequireDefault(_iteratorToArray);

var _mapToArray = require('./.internal/mapToArray.js');

var _mapToArray2 = _interopRequireDefault(_mapToArray);

var _setToArray = require('./.internal/setToArray.js');

var _setToArray2 = _interopRequireDefault(_setToArray);

var _stringToArray = require('./.internal/stringToArray.js');

var _stringToArray2 = _interopRequireDefault(_stringToArray);

var _values = require('./values.js');

var _values2 = _interopRequireDefault(_values);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var mapTag = '[object Map]';
var setTag = '[object Set]';

/** Built-in value references. */
var symIterator = Symbol ? Symbol.iterator : undefined;

/**
 * Converts `value` to an array.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * toArray({ 'a': 1, 'b': 2 })
 * // => [1, 2]
 *
 * toArray('abc')
 * // => ['a', 'b', 'c']
 *
 * toArray(1)
 * // => []
 *
 * toArray(null)
 * // => []
 */
function toArray(value) {
  if (!value) {
    return [];
  }
  if ((0, _isArrayLike2.default)(value)) {
    return (0, _isString2.default)(value) ? (0, _stringToArray2.default)(value) : (0, _copyArray2.default)(value);
  }
  if (symIterator && value[symIterator]) {
    return (0, _iteratorToArray2.default)(value[symIterator]());
  }
  var tag = (0, _getTag2.default)(value);
  var func = tag == mapTag ? _mapToArray2.default : tag == setTag ? _setToArray2.default : _values2.default;

  return func(value);
}

exports.default = toArray;

//# sourceMappingURL=toArray.js.map