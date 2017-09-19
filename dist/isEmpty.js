'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getTag = require('./.internal/getTag.js');

var _getTag2 = _interopRequireDefault(_getTag);

var _isArguments = require('./isArguments.js');

var _isArguments2 = _interopRequireDefault(_isArguments);

var _isArrayLike = require('./isArrayLike.js');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isBuffer = require('./isBuffer.js');

var _isBuffer2 = _interopRequireDefault(_isBuffer);

var _isPrototype = require('./.internal/isPrototype.js');

var _isPrototype2 = _interopRequireDefault(_isPrototype);

var _isTypedArray = require('./isTypedArray.js');

var _isTypedArray2 = _interopRequireDefault(_isTypedArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to check objects for own properties. */
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if ((0, _isArrayLike2.default)(value) && (Array.isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || (0, _isBuffer2.default)(value) || (0, _isTypedArray2.default)(value) || (0, _isArguments2.default)(value))) {
    return !value.length;
  }
  var tag = (0, _getTag2.default)(value);
  if (tag == '[object Map]' || tag == '[object Set]') {
    return !value.size;
  }
  if ((0, _isPrototype2.default)(value)) {
    return !Object.keys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

exports.default = isEmpty;

//# sourceMappingURL=isEmpty.js.map