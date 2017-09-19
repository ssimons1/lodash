'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _before = require('./before.js');

var _before2 = _interopRequireDefault(_before);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * const initialize = once(createApplication)
 * initialize()
 * initialize()
 * // => `createApplication` is invoked once
 */
function once(func) {
  return (0, _before2.default)(2, func);
}

exports.default = once;

//# sourceMappingURL=once.js.map