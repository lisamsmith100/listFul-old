QUnit.module('JSHint | routes/users.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/users.js should pass jshint.\nroutes/users.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/users.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/users.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
});
