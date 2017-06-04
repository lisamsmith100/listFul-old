define('ember-local-storage/initializers/local-storage-adapter', ['exports', 'ember-data', 'ember-local-storage/helpers/import-export'], function (exports, _emberData, _emberLocalStorageHelpersImportExport) {
  exports.initialize = initialize;

  function initialize() {
    if (!_emberData['default'].Store.prototype._emberLocalStoragePatched) {
      _emberData['default'].Store.reopen({
        _emberLocalStoragePatched: true,
        importData: function importData(json, options) {
          return (0, _emberLocalStorageHelpersImportExport.importData)(this, json, options);
        },
        exportData: function exportData(types, options) {
          return (0, _emberLocalStorageHelpersImportExport.exportData)(this, types, options);
        }
      });
    }
  }

  exports['default'] = {
    name: 'local-storage-adapter',
    after: 'ember-data',
    initialize: initialize
  };
});