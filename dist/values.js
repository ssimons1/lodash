'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseValues = require('./.internal/baseValues.js');

var _baseValues2 = _interopRequireDefault(_baseValues);

var _keys = require('./keys.js');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @see keys, valuesIn
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * values(new Foo)
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * values('hi')
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : (0, _baseValues2.default)(object, (0, _keys2.default)(object));
}

exports.default = values;

//# sourceMappingURL=values.js.map