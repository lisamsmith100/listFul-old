define('listFul/app', ['exports', 'ember', 'listFul/resolver', 'ember-load-initializers', 'listFul/config/environment'], function (exports, _ember, _listFulResolver, _emberLoadInitializers, _listFulConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _listFulConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _listFulConfigEnvironment['default'].podModulePrefix,
    Resolver: _listFulResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _listFulConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});