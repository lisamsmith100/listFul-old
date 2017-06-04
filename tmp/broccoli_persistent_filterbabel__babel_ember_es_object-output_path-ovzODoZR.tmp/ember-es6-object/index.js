define('ember-es6-object/index', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _class = function () {
    function _class() {
      _classCallCheck(this, _class);

      _ember.default.meta(this);
    }

    _createClass(_class, [{
      key: 'get',
      value: function get(key) {
        return _ember.default.get(this, key);
      }
    }, {
      key: 'set',
      value: function set(key) {
        return _ember.default.set(this, key);
      }
    }], [{
      key: 'create',
      value: function create(attrs) {
        return new this(attrs);
      }
    }, {
      key: 'extend',
      value: function extend() {
        throw new Error('please use ES6 class syntax for subclassing this object');
      }
    }]);

    return _class;
  }();

  exports.default = _class;
});