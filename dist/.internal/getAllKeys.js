'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getSymbols = require('./getSymbols.js');

var _getSymbols2 = _interopRequireDefault(_getSymbols);

var _keys = require('../keys.js');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  var result = (0, _keys2.default)(object);
  if (!Array.isArray(object)) {
    result.push.apply(result, _toConsumableArray((0, _getSymbols2.default)(object)));
  }
  return result;
}

exports.default = getAllKeys;

//# sourceMappingURL=getAllKeys.js.map