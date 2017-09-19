'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nth = require('./nth.js');

var _nth2 = _interopRequireDefault(_nth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a function that gets the argument at index `n`. If `n` is negative,
 * the nth argument from the end is returned.
 *
 * @since 4.0.0
 * @category Util
 * @param {number} [n=0] The index of the argument to return.
 * @returns {Function} Returns the new pass-thru function.
 * @example
 *
 * const func = nthArg(1)
 * func('a', 'b', 'c', 'd')
 * // => 'b'
 *
 * const func = nthArg(-2)
 * func('a', 'b', 'c', 'd')
 * // => 'c'
 */
function nthArg(n) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _nth2.default)(args, n);
  };
}

exports.default = nthArg;

//# sourceMappingURL=nthArg.js.map