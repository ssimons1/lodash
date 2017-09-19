"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Iterates over properties of `object`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, key, object).
 *
 * @since 5.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const object = { 'a': 5, 'b': 8, 'c': 10 }
 *
 * filterObject(object, (n) => !(n % 5))
 * // => [5, 10]
 */
function filterObject(object, predicate) {
  object = Object(object);
  var result = [];

  Object.keys(object).forEach(function (key) {
    var value = object[key];
    if (predicate(value, key, object)) {
      result.push(value);
    }
  });
  return result;
}

exports.default = filterObject;

//# sourceMappingURL=filterObject.js.map