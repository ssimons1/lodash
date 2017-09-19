'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _every = require('./every.js');

var _every2 = _interopRequireDefault(_every);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a function that checks if **all** of the `predicates` return
 * truthy when invoked with the arguments it receives.
 *
 * @since 4.0.0
 * @category Util
 * @param {Function[]} [predicates=[identity]]
 *  The predicates to check.
 * @returns {Function} Returns the new function.
 * @example
 *
 * const func = overEvery([Boolean, isFinite])
 *
 * func('1')
 * // => true
 *
 * func(null)
 * // => false
 *
 * func(NaN)
 * // => false
 */
function overEvery(iteratees) {
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _every2.default)(iteratees, function (iteratee) {
      return iteratee.apply(_this, args);
    });
  };
}

exports.default = overEvery;

//# sourceMappingURL=overEvery.js.map