QUnit.module('JSHint | initializers/text-field.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'initializers/text-field.js should pass jshint.\ninitializers/text-field.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ninitializers/text-field.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ninitializers/text-field.js: line 9, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ninitializers/text-field.js: line 11, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n4 errors');
});
