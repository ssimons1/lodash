'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGet = require('./baseGet.js');

var _baseGet2 = _interopRequireDefault(_baseGet);

var _baseSet = require('./baseSet.js');

var _baseSet2 = _interopRequireDefault(_baseSet);

var _castPath = require('./castPath.js');

var _castPath2 = _interopRequireDefault(_castPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `pickBy`.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1;
  var length = paths.length;
  var result = {};

  while (++index < length) {
    var path = paths[index];
    var value = (0, _baseGet2.default)(object, path);
    if (predicate(value, path)) {
      (0, _baseSet2.default)(result, (0, _castPath2.default)(path, object), value);
    }
  }
  return result;
}

exports.default = basePickBy;

//# sourceMappingURL=basePickBy.js.map