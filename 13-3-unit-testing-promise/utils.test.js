const { generateRandomStringProm } = require('./utils');
const assert = require('assert');

(async () => {
  // when given a string, it should return an error
  await assert.rejects(generateRandomStringProm('a'), { message: 'Length must be a number' });
  // when given a number less than 1, it should return an error
  await assert.rejects(generateRandomStringProm(0), { message: 'Length must be greater than 0' });

  // positive test case, when given a number greater than 0
  const result = await generateRandomStringProm(5);
  assert.strictEqual(result.length, 5, 'should return a string with length 5');

  console.log('All tests passed');
})();