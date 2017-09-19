'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isKey = require('./isKey.js');

var _isKey2 = _interopRequireDefault(_isKey);

var _stringToPath = require('./stringToPath.js');

var _stringToPath2 = _interopRequireDefault(_stringToPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (Array.isArray(value)) {
    return value;
  }
  return (0, _isKey2.default)(value, object) ? [value] : (0, _stringToPath2.default)(value);
}

exports.default = castPath;

//# sourceMappingURL=castPath.js.map