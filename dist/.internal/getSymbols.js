'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filter = require('../filter.js');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? function () {
  return [];
} : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return (0, _filter2.default)(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

exports.default = getSymbols;

//# sourceMappingURL=getSymbols.js.map