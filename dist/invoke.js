'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _castPath = require('./.internal/castPath.js');

var _castPath2 = _interopRequireDefault(_castPath);

var _last = require('./last.js');

var _last2 = _interopRequireDefault(_last);

var _parent = require('./.internal/parent.js');

var _parent2 = _interopRequireDefault(_parent);

var _toKey = require('./.internal/toKey.js');

var _toKey2 = _interopRequireDefault(_toKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Invokes the method at `path` of `object`.
 *
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} [args] The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] }
 *
 * invoke(object, 'a[0].b.c.slice', [1, 3])
 * // => [2, 3]
 */
function invoke(object, path, args) {
  path = (0, _castPath2.default)(path, object);
  object = (0, _parent2.default)(object, path);
  var func = object == null ? object : object[(0, _toKey2.default)((0, _last2.default)(path))];
  return func == null ? undefined : func.apply(object, args);
}

exports.default = invoke;

//# sourceMappingURL=invoke.js.map