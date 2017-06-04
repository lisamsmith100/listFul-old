define('ember-local-storage/mixins/adapters/import-export', ['exports', 'ember', 'ember-local-storage/helpers/import-export'], function (exports, _ember, _emberLocalStorageHelpersImportExport) {
  var Mixin = _ember['default'].Mixin;
  exports['default'] = Mixin.create({
    importData: function importData(store, content, options) {
      return (0, _emberLocalStorageHelpersImportExport.importData)(store, content, options);
    },

    exportData: function exportData(store, types, options) {
      return (0, _emberLocalStorageHelpersImportExport.exportData)(store, types, options);
    }
  });
});