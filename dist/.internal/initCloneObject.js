'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isPrototype = require('./isPrototype.js');

var _isPrototype2 = _interopRequireDefault(_isPrototype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !(0, _isPrototype2.default)(object) ? Object.create(Object.getPrototypeOf(object)) : {};
}

exports.default = initCloneObject;

//# sourceMappingURL=initCloneObject.js.map