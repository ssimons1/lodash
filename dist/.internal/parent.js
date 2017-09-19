'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGet = require('./baseGet.js');

var _baseGet2 = _interopRequireDefault(_baseGet);

var _slice = require('../slice.js');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : (0, _baseGet2.default)(object, (0, _slice2.default)(path, 0, -1));
}

exports.default = parent;

//# sourceMappingURL=parent.js.map