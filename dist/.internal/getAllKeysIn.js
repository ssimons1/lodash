'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getSymbolsIn = require('./getSymbolsIn.js');

var _getSymbolsIn2 = _interopRequireDefault(_getSymbolsIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Creates an array of own and inherited enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  var result = [];
  for (var key in object) {
    result.push(key);
  }
  if (!Array.isArray(object)) {
    result.push.apply(result, _toConsumableArray((0, _getSymbolsIn2.default)(object)));
  }
  return result;
}

exports.default = getAllKeysIn;

//# sourceMappingURL=getAllKeysIn.js.map