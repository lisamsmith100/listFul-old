define('ember-local-storage/helpers/import-export', ['exports', 'ember'], function (exports, _ember) {
  exports.importData = importData;
  exports.exportData = exportData;
  var get = _ember['default'].get;
  var singularize = _ember['default'].String.singularize;
  var run = _ember['default'].run;

  var assign = _ember['default'].assign || _ember['default'].merge;

  function importData(store, content, options) {
    // merge defaults
    options = assign({
      json: true,
      truncate: true
    }, options || {});

    var reloadTypes = [];

    content = options.json ? JSON.parse(content) : content;

    if (options.truncate) {
      content.data.forEach(function (record) {
        var type = record.type;
        var adapter = store.adapterFor(singularize(type));

        adapter._getIndex(type).forEach(function (storageKey) {
          delete get(adapter, '_storage')[storageKey];
        });

        adapter._getIndex(type).reset();

        // unload from store
        store.unloadAll(singularize(type));
      });
    }

    var promises = content.data.map(function (record) {
      var adapter = store.adapterFor(singularize(record.type));

      // collect types to reload
      reloadTypes.push(singularize(record.type));

      return adapter._handleStorageRequest(null, 'POST', {
        data: { data: record }
      });
    });

    return _ember['default'].RSVP.all(promises).then(function () {
      // reload from store
      reloadTypes.forEach(function (type) {
        store.findAll(type);
      });
    });
  }

  function exportData(store, types, options) {
    // merge defaults
    options = assign({
      json: true,
      download: false,
      filename: 'ember-data.json'
    }, options || {});

    var json = undefined,
        data = undefined;

    // collect data
    data = types.reduce(function (records, type) {
      var adapter = store.adapterFor(singularize(type));
      var url = adapter.buildURL(type),
          exportData = adapter._handleGETRequest(url);

      records.data = records.data.concat(exportData);
      return records;
    }, { data: [] });

    if (options.json || options.download) {
      json = JSON.stringify(data);
    }

    if (options.json) {
      data = json;
    }

    if (options.download) {
      window.saveAs(new Blob([json], { type: 'application/json;charset=utf-8' }), options.filename);
    }

    return new _ember['default'].RSVP.Promise(function (resolve) {
      run(null, resolve, data);
    }, 'DS: LocalStorageAdapter#exportData');
  }
});