'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('./map.js');

var _map2 = _interopRequireDefault(_map);

var _basePickBy = require('./.internal/basePickBy.js');

var _basePickBy2 = _interopRequireDefault(_basePickBy);

var _getAllKeysIn = require('./.internal/getAllKeysIn.js');

var _getAllKeysIn2 = _interopRequireDefault(_getAllKeysIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 }
 *
 * pickBy(object, isNumber)
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = (0, _map2.default)((0, _getAllKeysIn2.default)(object), function (prop) {
    return [prop];
  });
  return (0, _basePickBy2.default)(object, props, function (value, path) {
    return predicate(value, path[0]);
  });
}

exports.default = pickBy;

//# sourceMappingURL=pickBy.js.map