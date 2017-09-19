'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getSymbols = require('./getSymbols.js');

var _getSymbols2 = _interopRequireDefault(_getSymbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? function () {
  return [];
} : function (object) {
  var result = [];
  while (object) {
    result.push.apply(result, _toConsumableArray((0, _getSymbols2.default)(object)));
    object = Object.getPrototypeOf(Object(object));
  }
  return result;
};

exports.default = getSymbolsIn;

//# sourceMappingURL=getSymbolsIn.js.map