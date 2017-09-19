"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The inverse of `toPairs`is method returns an object composed
 * from key-value `pairs`.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * fromPairs([['a', 1], ['b', 2]])
 * // => { 'a': 1, 'b': 2 }
 */
function fromPairs(pairs) {
  var result = {};
  if (pairs == null) {
    return result;
  }
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = pairs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var pair = _step.value;

      result[pair[0]] = pair[1];
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

  return result;
}

exports.default = fromPairs;

//# sourceMappingURL=fromPairs.js.map