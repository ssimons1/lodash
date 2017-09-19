"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The base implementation of `values` and `valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return props == null ? [] : props.map(function (key) {
    return object[key];
  });
}

exports.default = baseValues;

//# sourceMappingURL=baseValues.js.map