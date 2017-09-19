"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This base implementation of `zipObject` which assigns values using `assignFunc`.
 *
 * @private
 * @param {Array} props The property identifiers.
 * @param {Array} values The property values.
 * @param {Function} assignFunc The function to assign values.
 * @returns {Object} Returns the new object.
 */
function baseZipObject(props, values, assignFunc) {
  var index = -1;
  var length = props.length;
  var valsLength = values.length;
  var result = {};

  while (++index < length) {
    var value = index < valsLength ? values[index] : undefined;
    assignFunc(result, props[index], value);
  }
  return result;
}

exports.default = baseZipObject;

//# sourceMappingURL=baseZipObject.js.map