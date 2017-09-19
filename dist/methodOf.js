'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _invoke = require('./invoke.js');

var _invoke2 = _interopRequireDefault(_invoke);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The opposite of `method` this method creates a function that invokes
 * the method at a given path of `object`. Any additional arguments are
 * provided to the invoked method.
 *
 * @since 3.7.0
 * @category Util
 * @param {Object} object The object to query.
 * @param {Array} [args] The arguments to invoke the method with.
 * @returns {Function} Returns the new invoker function.
 * @example
 *
 * const array = times(3, i => () => i)
 * const object = { 'a': array, 'b': array, 'c': array }
 *
 * map(['a[2]', 'c[0]'], methodOf(object))
 * // => [2, 0]
 *
 * map([['a', '2'], ['c', '0']], methodOf(object))
 * // => [2, 0]f
 */
function methodOf(object, args) {
  return function (path) {
    return (0, _invoke2.default)(object, path, args);
  };
}

exports.default = methodOf;

//# sourceMappingURL=methodOf.js.map