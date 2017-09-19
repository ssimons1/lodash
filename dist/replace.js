"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Replaces matches for `pattern` in `string` with `replacement`.
 *
 * **Note:** This method is based on
 * [`String#replace`](https://mdn.io/String/replace).
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to modify.
 * @param {RegExp|string} pattern The pattern to replace.
 * @param {Function|string} replacement The match replacement.
 * @returns {string} Returns the modified string.
 * @see truncate, trim
 * @example
 *
 * replace('Hi Fred', 'Fred', 'Barney')
 * // => 'Hi Barney'
 */
function replace() {
  var string = "" + (arguments.length <= 0 ? undefined : arguments[0]);
  return arguments.length < 3 ? string : string.replace(arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
}

exports.default = replace;

//# sourceMappingURL=replace.js.map