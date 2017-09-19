'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _some = require('./some.js');

var _some2 = _interopRequireDefault(_some);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a function that checks if **any** of the `predicates` return
 * truthy when invoked with the arguments it receives.
 *
 * @since 4.0.0
 * @category Util
 * @param {Function[]} [predicates=[identity]]
 *  The predicates to check.
 * @returns {Function} Returns the new function.
 * @example
 *
 * const func = overSome([Boolean, isFinite])
 *
 * func('1')
 * // => true
 *
 * func(null)
 * // => true
 *
 * func(NaN)
 * // => false
 */
function overSome(iteratees) {
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _some2.default)(iteratees, function (iteratee) {
      return iteratee.apply(_this, args);
    });
  };
}

exports.default = overSome;

//# sourceMappingURL=overSome.js.map