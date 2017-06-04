define('listFul/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'listFul/tests/helpers/start-app', 'listFul/tests/helpers/destroy-app'], function (exports, _qunit, _listFulTestsHelpersStartApp, _listFulTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _listFulTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _listFulTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});