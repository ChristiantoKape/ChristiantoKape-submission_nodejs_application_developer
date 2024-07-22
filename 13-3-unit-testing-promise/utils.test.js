const { generateRandomStringProm } = require('./utils');
const assert = require('assert');

(async () => {
  // when given a string, it should return an error
  await assert.rejects(generateRandomStringProm('a'), { message: 'Length must be a number' });
  // when given a number less than 1, it should return an error
  await assert.rejects(generateRandomStringProm(0), { message: 'Length must be greater than 0' });

  // when given a number, it should return a string
  const result = await generateRandomStringProm(10);
  assert.strictEqual(typeof result, 'string');

  console.log('All tests passed');
})();