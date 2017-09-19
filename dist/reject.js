'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filter = require('./filter.js');

var _filter2 = _interopRequireDefault(_filter);

var _filterObject = require('./filterObject.js');

var _filterObject2 = _interopRequireDefault(_filterObject);

var _negate = require('./negate.js');

var _negate2 = _interopRequireDefault(_negate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The opposite of `filter` this method returns the elements of `collection`
 * that `predicate` does **not** return truthy for.
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, filter
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * reject(users, ({ active }) => active)
 * // => objects for ['fred']
 */
function reject(collection, predicate) {
  var func = Array.isArray(collection) ? _filter2.default : _filterObject2.default;
  return func(collection, (0, _negate2.default)(predicate));
}

exports.default = reject;

//# sourceMappingURL=reject.js.map