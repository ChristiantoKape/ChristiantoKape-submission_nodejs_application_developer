const { generateRandomString } = require('./utils');
const assert = require('assert');

generateRandomString('string', (error, result) => {
  assert.ok(error, 'should be thrown when length is not a number');
  assert.strictEqual(error.message, 'Length must be a number');
});

generateRandomString(0, (error, result) => {
  assert.ok(error, 'should be thrown when length is 0');
  assert.strictEqual(error.message, 'Length must be greater than 0');
});

// testing skenario ketika length = 5
generateRandomString(5, (error, result) => {
  assert.strictEqual(error, null, 'should be null when length');
  assert.strictEqual(result.length, 5, 'should return a string with length 5');
});
console.log('tests passed!');