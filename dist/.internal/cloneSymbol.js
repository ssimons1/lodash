"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used to convert symbols to primitives and strings. */
var symbolValueOf = Symbol.prototype.valueOf;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

exports.default = cloneSymbol;

//# sourceMappingURL=cloneSymbol.js.map