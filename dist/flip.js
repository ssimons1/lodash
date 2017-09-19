'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a function that invokes `func` with arguments reversed.
 *
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to flip arguments for.
 * @returns {Function} Returns the new flipped function.
 * @see reverse
 * @example
 *
 * const flipped = flip((...args) => args)
 *
 * flipped('a', 'b', 'c', 'd')
 * // => ['d', 'c', 'b', 'a']
 */
function flip(func) {
  if (typeof func != 'function') {
    throw new TypeError('Expected a function');
  }
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return func.apply(this, args.reverse());
  };
}

exports.default = flip;

//# sourceMappingURL=flip.js.map