"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argumentindex).
 *
 * @since 0.1.0
 * @category Util
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * times(3, String)
 * // => ['0', '1', '2']
 *
 *  times(4, () => 0)
 * // => [0, 0, 0, 0]
 */
function times(n, iteratee) {
  if (n < 1 || n > MAX_SAFE_INTEGER) {
    return [];
  }
  var index = -1;
  var length = Math.min(n, MAX_ARRAY_LENGTH);
  var result = new Array(length);
  while (++index < length) {
    result[index] = iteratee(index);
  }
  index = MAX_ARRAY_LENGTH;
  n -= MAX_ARRAY_LENGTH;
  while (++index < n) {
    iteratee(index);
  }
  return result;
}

exports.default = times;

//# sourceMappingURL=times.js.map