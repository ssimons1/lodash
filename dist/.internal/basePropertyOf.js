"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The base implementation of `propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function (key) {
    return object == null ? undefined : object[key];
  };
}

exports.default = basePropertyOf;

//# sourceMappingURL=basePropertyOf.js.map