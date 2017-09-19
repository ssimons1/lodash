'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var toString = objectProto.toString;
var symToStringTag = typeof Symbol != 'undefined' ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  if (!(symToStringTag && symToStringTag in Object(value))) {
    return toString.call(value);
  }
  var isOwn = hasOwnProperty.call(value, symToStringTag);
  var tag = value[symToStringTag];
  var unmasked = false;
  try {
    value[symToStringTag] = undefined;
    unmasked = true;
  } catch (e) {}

  var result = toString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

exports.default = baseGetTag;

//# sourceMappingURL=baseGetTag.js.map