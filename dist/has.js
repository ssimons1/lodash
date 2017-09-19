"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used to check objects for own properties. */
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Checks if `key` is a direct property of `object`.
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 * @see hasIn, hasPath, hasPathIn
 * @example
 *
 * const object = { 'a': { 'b': 2 } }
 * const other = create({ 'a': create({ 'b': 2 }) })
 *
 * has(object, 'a')
 * // => true
 *
 * has(other, 'a')
 * // => false
 */
function has(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

exports.default = has;

//# sourceMappingURL=has.js.map