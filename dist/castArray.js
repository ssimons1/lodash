"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Casts `value` as an array if it's not one.
 *
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * castArray(1)
 * // => [1]
 *
 * castArray({ 'a': 1 })
 * // => [{ 'a': 1 }]
 *
 * castArray('abc')
 * // => ['abc']
 *
 * castArray(null)
 * // => [null]
 *
 * castArray(undefined)
 * // => [undefined]
 *
 * castArray()
 * // => []
 *
 * const array = [1, 2, 3]
 * console.log(castArray(array) === array)
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments.length <= 0 ? undefined : arguments[0];
  return Array.isArray(value) ? value : [value];
}

exports.default = castArray;

//# sourceMappingURL=castArray.js.map