// const sum = require('../../../src/components/modules/sum');
import sum from '../../../src/components/modules/sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});