'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayLikeKeys = require('./.internal/arrayLikeKeys.js');

var _arrayLikeKeys2 = _interopRequireDefault(_arrayLikeKeys);

var _isArrayLike = require('./isArrayLike.js');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @see values, valuesIn
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * keys(new Foo)
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * keys('hi')
 * // => ['0', '1']
 */
function keys(object) {
  return (0, _isArrayLike2.default)(object) ? (0, _arrayLikeKeys2.default)(object) : Object.keys(Object(object));
}

exports.default = keys;

//# sourceMappingURL=keys.js.map