'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flow = require('./flow.js');

var _flow2 = _interopRequireDefault(_flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `flow` except that it composes a function that
 * invokes the given functions from right to left.
 *
 * @since 3.0.0
 * @category Util
 * @param {Function[]} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see flow
 * @example
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * const addSquare = flowRight([square, add])
 * addSquare(1, 2)
 * // => 9
 */
function flowRight(funcs) {
  return (0, _flow2.default)(funcs.reverse());
}

exports.default = flowRight;

//# sourceMappingURL=flowRight.js.map