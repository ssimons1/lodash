'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates an array of function property names from own enumerable properties
 * of `object`.
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the function names.
 * @see functionsIn
 * @example
 *
 * function Foo() {
 *   this.a = () => 'a'
 *   this.b = () => 'b'
 * }
 *
 * Foo.prototype.c = () => 'c'
 *
 * functions(new Foo)
 * // => ['a', 'b']
 */
function functions(object) {
  if (object == null) {
    return [];
  }
  return Object.keys(object).filter(function (key) {
    return typeof object[key] == 'function';
  });
}

exports.default = functions;

//# sourceMappingURL=functions.js.map