define('ember-local-storage/helpers/utils', ['exports'], function (exports) {
  function save() {
    this._super.apply(this, arguments);
    this._save();
  }

  function saveIfChanged(key) {
    this._super.apply(this, arguments);

    if (key !== '_isInitialContent') {
      this._save();
    }
  }

  exports.save = save;
  exports.saveIfChanged = saveIfChanged;
});