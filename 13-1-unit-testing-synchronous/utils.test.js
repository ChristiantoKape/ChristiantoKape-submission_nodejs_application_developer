const { generateRandomStringSync } = require('./utils');
const assert = require('assert');

assert.throws(() => generateRandomStringSync('a'), /^Error: Length must be a number$/);
assert.throws(() => generateRandomStringSync(0), /^Error: Length must be at least 1$/);
assert.strictEqual(generateRandomStringSync(1).length, 1);

console.log('All tests passed');