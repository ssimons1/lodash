'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

var Hash = function () {

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    _classCallCheck(this, Hash);

    var index = -1;
    var length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the hash.
   *
   * @memberOf Hash
   */


  _createClass(Hash, [{
    key: 'clear',
    value: function clear() {
      this.__data__ = Object.create(null);
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */

  }, {
    key: 'delete',
    value: function _delete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */

  }, {
    key: 'get',
    value: function get(key) {
      var data = this.__data__;
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */

  }, {
    key: 'has',
    value: function has(key) {
      var data = this.__data__;
      return data[key] !== undefined;
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */

  }, {
    key: 'set',
    value: function set(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = value === undefined ? HASH_UNDEFINED : value;
      return this;
    }
  }]);

  return Hash;
}();

exports.default = Hash;

//# sourceMappingURL=Hash.js.map