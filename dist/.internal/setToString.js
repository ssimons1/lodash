'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
function setToString(func, string) {
  return Object.defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': function value() {
      return string;
    },
    'writable': true
  });
}

exports.default = setToString;

//# sourceMappingURL=setToString.js.map