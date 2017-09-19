"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Creates a function that invokes `func` with its arguments transformed.
 *
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to wrap.
 * @param {Function[]} [transforms=[identity]]
 *  The argument transforms.
 * @returns {Function} Returns the new function.
 * @example
 *
 * function doubled(n) {
 *   return n * 2
 * }
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * const func = overArgs((x, y) => [x, y], [square, doubled])
 *
 * func(9, 3)
 * // => [81, 6]
 *
 * func(10, 5)
 * // => [100, 10]
 */
function overArgs(func, transforms) {
  var funcsLength = transforms.length;
  return function () {
    var index = -1;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var length = Math.min(args.length, funcsLength);
    while (++index < length) {
      args[index] = transforms[index].call(this, args[index]);
    }
    return func.apply(this, args);
  };
}

exports.default = overArgs;

//# sourceMappingURL=overArgs.js.map