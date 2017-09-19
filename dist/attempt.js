'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isError = require('./isError.js');

var _isError2 = _interopRequireDefault(_isError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Attempts to invoke `func`, returning either the result or the caught error
 * object. Any additional arguments are provided to `func` when it's invoked.
 *
 * @since 3.0.0
 * @category Util
 * @param {Function} func The function to attempt.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {*} Returns the `func` result or error object.
 * @example
 *
 * // Avoid throwing errors for invalid selectors.
 * const elements = attempt(selector =>
 *   document.querySelectorAll(selector), '>_>')
 *
 * if (isError(elements)) {
 *   elements = []
 * }
 */
function attempt(func) {
  try {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return func.apply(undefined, args);
  } catch (e) {
    return (0, _isError2.default)(e) ? e : new Error(e);
  }
}

exports.default = attempt;

//# sourceMappingURL=attempt.js.map