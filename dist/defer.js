'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Defers invoking the `func` until the current call stack has cleared. Any
 * additional arguments are provided to `func` when it's invoked.
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to defer.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * defer(text => console.log(text), 'deferred')
 * // => Logs 'deferred' after one millisecond.
 */
function defer(func) {
  if (typeof func != 'function') {
    throw new TypeError('Expected a function');
  }

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return setTimeout.apply(undefined, [func, 1].concat(args));
}

exports.default = defer;

//# sourceMappingURL=defer.js.map