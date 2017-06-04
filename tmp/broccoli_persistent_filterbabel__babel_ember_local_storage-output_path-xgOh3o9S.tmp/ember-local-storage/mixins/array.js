define('ember-local-storage/mixins/array', ['exports', 'ember', 'ember-local-storage/mixins/storage', 'ember-local-storage/helpers/utils'], function (exports, _ember, _emberLocalStorageMixinsStorage, _emberLocalStorageHelpersUtils) {
  var A = _ember['default'].A;
  var Mixin = _ember['default'].Mixin;
  var set = _ember['default'].set;
  exports['default'] = Mixin.create(_emberLocalStorageMixinsStorage['default'], {
    _initialContent: A(),
    _clear: function _clear() {
      set(this, 'content', _ember['default'].A());
    },

    replaceContent: _emberLocalStorageHelpersUtils.save,
    reset: _emberLocalStorageHelpersUtils.save
  });
});