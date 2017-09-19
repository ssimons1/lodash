'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIndexOf = require('./baseIndexOf.js');

var _baseIndexOf2 = _interopRequireDefault(_baseIndexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used by `trim` and `trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && (0, _baseIndexOf2.default)(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

exports.default = charsEndIndex;

//# sourceMappingURL=charsEndIndex.js.map