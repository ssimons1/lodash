'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArguments = require('../isArguments.js');

var _isArguments2 = _interopRequireDefault(_isArguments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value reference. */
var spreadableSymbol = Symbol.isConcatSpreadable;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return Array.isArray(value) || (0, _isArguments2.default)(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}

exports.default = isFlattenable;

//# sourceMappingURL=isFlattenable.js.map