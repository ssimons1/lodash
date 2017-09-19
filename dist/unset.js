'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseUnset = require('./.internal/baseUnset.js');

var _baseUnset2 = _interopRequireDefault(_baseUnset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes the property at `path` of `object`.
 *
 * **Note:** This method mutates `object`.
 *
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 * @see get, has, set
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 7 } }] }
 * unset(object, 'a[0].b.c')
 * // => true
 *
 * console.log(object)
 * // => { 'a': [{ 'b': {} }] }
 *
 * unset(object, ['a', '0', 'b', 'c'])
 * // => true
 *
 * console.log(object)
 * // => { 'a': [{ 'b': {} }] }
 */
function unset(object, path) {
  return object == null ? true : (0, _baseUnset2.default)(object, path);
}

exports.default = unset;

//# sourceMappingURL=unset.js.map