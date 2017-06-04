define('ember-local-storage/mixins/storage', ['exports', 'ember', 'ember-local-storage/helpers/storage'], function (exports, _ember, _emberLocalStorageHelpersStorage) {
  var Mixin = _ember['default'].Mixin;
  var get = _ember['default'].get;
  var set = _ember['default'].set;
  var copy = _ember['default'].copy;
  var isArray = _ember['default'].isArray;

  var assign = _ember['default'].assign || _ember['default'].merge;

  exports['default'] = Mixin.create({
    _storageKey: null,
    _initialContent: null,
    _initialContentString: null,
    _isInitialContent: true,
    // we need it for storage event testing
    _testing: false,

    // Shorthand for the storage
    _storage: function _storage() {
      return (0, _emberLocalStorageHelpersStorage.getStorage)(get(this, '_storageType'));
    },

    init: function init() {
      var storage = this._storage();
      var storageKey = get(this, '_storageKey');
      var initialContent = get(this, '_initialContent');

      var serialized = undefined,
          content = undefined;

      set(this, '_initialContentString', JSON.stringify(initialContent));

      // Merge the serialized version into defaults.
      content = this._getInitialContentCopy();

      // Retrieve the serialized version from storage.
      serialized = storage[storageKey];
      if (serialized) {
        assign(content, JSON.parse(serialized));
      }

      // Do not change to set(this, 'content', content)
      this.set('content', content);

      // Keep in sync with other windows
      this._addStorageListener();

      return this._super.apply(this, arguments);
    },

    _getInitialContentCopy: function _getInitialContentCopy() {
      var initialContent = get(this, '_initialContent');
      var content = copy(initialContent, true);

      // Ember.copy returns a normal array when prototype extensions are off
      // This ensures that we wrap it in an Ember Array.
      return isArray(content) ? _ember['default'].A(content) : content;
    },

    _addStorageListener: function _addStorageListener() {
      var _this = this;

      var storage = this._storage();
      var storageKey = get(this, '_storageKey');

      if (window.addEventListener) {
        this._storageEventHandler = function (event) {
          if (_this.isDestroying) {
            return;
          }

          if (event.storageArea === storage && event.key === storageKey) {
            if ('hidden' in document && !document.hidden && !_this._testing || event.newValue === event.oldValue || event.newValue === JSON.stringify(_this.get('content'))) {
              return;
            }

            if (event.newValue) {
              // TODO: Why do we use this.set here? I guess it's the loop bug...
              _this.set('content', JSON.parse(event.newValue));
            } else {
              _this.clear();
            }
          }
        };

        window.addEventListener('storage', this._storageEventHandler, false);
      }
    },

    _save: function _save() {
      var storage = this._storage();
      var content = get(this, 'content');
      var storageKey = get(this, '_storageKey');
      var initialContentString = get(this, '_initialContentString');

      // TODO: Why is it needed?
      if (storageKey) {
        var json = JSON.stringify(content);

        if (json !== initialContentString) {
          set(this, '_isInitialContent', false);
        }

        storage[storageKey] = json;
      }
    },

    willDestroy: function willDestroy() {
      if (this._storageEventHandler) {
        window.removeEventHandler('storage', this._storageEventHandler, false);
      }

      this._super.apply(this, arguments);
    },

    // Public API

    // returns boolean
    isInitialContent: function isInitialContent() {
      return get(this, '_isInitialContent');
    },

    // reset the content
    // returns void
    reset: function reset() {
      var content = this._getInitialContentCopy();

      // Do not change to set(this, 'content', content)
      this.set('content', content);
      set(this, '_isInitialContent', true);
    },

    // clear the content
    // returns void
    clear: function clear() {
      this._clear();
      delete this._storage()[get(this, '_storageKey')];
    }
  });
});