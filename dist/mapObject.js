"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates an array of values by running each property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments: (value, key, object).
 *
 * @since 5.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * map({ 'a': 4, 'b': 8 }, square)
 * // => [16, 64] (iteration order is not guaranteed)
 */
function mapObject(object, iteratee) {
  var props = Object.keys(object);
  var result = new Array(props.length);

  props.forEach(function (key, index) {
    result[index] = iteratee(object[key], key, object);
  });
  return result;
}

exports.default = mapObject;

//# sourceMappingURL=mapObject.js.map