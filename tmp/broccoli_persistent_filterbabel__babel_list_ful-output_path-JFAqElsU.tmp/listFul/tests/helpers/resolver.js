define('listFul/tests/helpers/resolver', ['exports', 'listFul/resolver', 'listFul/config/environment'], function (exports, _listFulResolver, _listFulConfigEnvironment) {

  var resolver = _listFulResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _listFulConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _listFulConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});