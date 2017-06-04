define('listFul/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'listFul/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _listFulConfigEnvironment) {
  var _config$APP = _listFulConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});