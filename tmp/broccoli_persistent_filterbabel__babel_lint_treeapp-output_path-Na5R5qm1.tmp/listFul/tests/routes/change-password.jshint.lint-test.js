define('listFul/tests/routes/change-password.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | routes/change-password.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/change-password.js should pass jshint.\nroutes/change-password.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/change-password.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/change-password.js: line 8, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/change-password.js: line 10, col 14, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/change-password.js: line 11, col 14, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/change-password.js: line 12, col 14, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/change-password.js: line 16, col 14, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/change-password.js: line 19, col 15, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\n\n8 errors');
  });
});