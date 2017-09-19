'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', before(5, addContactToList))
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result = void 0;
  if (typeof func != 'function') {
    throw new TypeError('Expected a function');
  }
  return function () {
    if (--n > 0) {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = func.apply(this, args);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

exports.default = before;

//# sourceMappingURL=before.js.map