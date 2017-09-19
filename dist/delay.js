'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Invokes `func` after `wait` milliseconds. Any additional arguments are
 * provided to `func` when it's invoked.
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * delay(text => console.log(text), 1000, 'later')
 * // => Logs 'later' after one second.
 */
function delay(func, wait) {
  if (typeof func != 'function') {
    throw new TypeError('Expected a function');
  }

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return setTimeout.apply(undefined, [func, +wait || 0].concat(args));
}

exports.default = delay;

//# sourceMappingURL=delay.js.map