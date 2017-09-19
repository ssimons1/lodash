'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Composes a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @since 3.0.0
 * @category Util
 * @param {Function[]} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see flowRight
 * @example
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * const addSquare = flow([add, square])
 * addSquare(1, 2)
 * // => 9
 */
function flow(funcs) {
  var length = funcs ? funcs.length : 0;
  var index = length;
  while (index--) {
    if (typeof funcs[index] != 'function') {
      throw new TypeError('Expected a function');
    }
  }
  return function () {
    var index = 0;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var result = length ? funcs[index].apply(this, args) : args[0];
    while (++index < length) {
      result = funcs[index].call(this, result);
    }
    return result;
  };
}

exports.default = flow;

//# sourceMappingURL=flow.js.map