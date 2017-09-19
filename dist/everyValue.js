"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Checks if `predicate` returns truthy for **all** properties of `object`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, key, object).
 *
 * **Note:** This method returns `true` for
 * [empty objects](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty objects.
 *
 * @since 5.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all properties pass the predicate check,
 *  else `false`.
 * @example
 *
 * everyValue({ 'a': 0, 'b': 'yes', 'c': false }, Boolean)
 * // => false
 */
function everyValue(object, predicate) {
  object = Object(object);
  var props = Object.keys(object);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = props[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (!predicate(object[key], key, object)) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
}

exports.default = everyValue;

//# sourceMappingURL=everyValue.js.map