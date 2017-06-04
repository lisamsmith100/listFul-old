define('listFul/router', ['exports', 'ember', 'listFul/config/environment'], function (exports, _ember, _listFulConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _listFulConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('sign-up');
    this.route('sign-in');
    this.route('change-password');
    this.route('users');
  });

  exports['default'] = Router;
});