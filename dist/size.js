'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getTag = require('./.internal/getTag.js');

var _getTag2 = _interopRequireDefault(_getTag);

var _isArrayLike = require('./isArrayLike.js');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isString = require('./isString.js');

var _isString2 = _interopRequireDefault(_isString);

var _stringSize = require('./.internal/stringSize.js');

var _stringSize2 = _interopRequireDefault(_stringSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var mapTag = '[object Map]';
var setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * size([1, 2, 3])
 * // => 3
 *
 * size({ 'a': 1, 'b': 2 })
 * // => 2
 *
 * size('pebbles')
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if ((0, _isArrayLike2.default)(collection)) {
    return (0, _isString2.default)(collection) ? (0, _stringSize2.default)(collection) : collection.length;
  }
  var tag = (0, _getTag2.default)(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return Object.keys(collection).length;
}

exports.default = size;

//# sourceMappingURL=size.js.map