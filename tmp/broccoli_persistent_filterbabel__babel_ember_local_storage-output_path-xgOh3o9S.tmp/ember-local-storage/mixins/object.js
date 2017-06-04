define('ember-local-storage/mixins/object', ['exports', 'ember', 'ember-local-storage/mixins/storage', 'ember-local-storage/helpers/utils'], function (exports, _ember, _emberLocalStorageMixinsStorage, _emberLocalStorageHelpersUtils) {
  var Mixin = _ember['default'].Mixin;
  var set = _ember['default'].set;
  exports['default'] = Mixin.create(_emberLocalStorageMixinsStorage['default'], {
    _initialContent: {},
    _clear: function _clear() {
      set(this, 'content', {});
    },

    setUnknownProperty: _emberLocalStorageHelpersUtils.saveIfChanged,
    set: _emberLocalStorageHelpersUtils.saveIfChanged,
    setProperties: _emberLocalStorageHelpersUtils.save
  });
});