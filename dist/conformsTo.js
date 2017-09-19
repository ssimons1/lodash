'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseConformsTo = require('./.internal/baseConformsTo.js');

var _baseConformsTo2 = _interopRequireDefault(_baseConformsTo);

var _keys = require('./keys.js');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `object` conforms to `source` by invoking the predicate
 * properties of `source` with the corresponding property values of `object`.
 *
 * **Note:** This method is equivalent to `conforms` when `source` is
 * partially applied.
 *
 * @since 4.14.0
 * @category Lang
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property predicates to conform to.
 * @returns {boolean} Returns `true` if `object` conforms, else `false`.
 * @example
 *
 * const object = { 'a': 1, 'b': 2 }
 *
 * conformsTo(object, { 'b': function(n) { return n > 1 } })
 * // => true
 *
 * conformsTo(object, { 'b': function(n) { return n > 2 } })
 * // => false
 */
function conformsTo(object, source) {
  return source == null || (0, _baseConformsTo2.default)(object, source, (0, _keys2.default)(source));
}

exports.default = conformsTo;

//# sourceMappingURL=conformsTo.js.map