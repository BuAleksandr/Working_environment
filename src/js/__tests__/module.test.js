import sum from '../module';

test('test sum function', () => {
  const expected = 9;
  const received = sum(3, 6);

  expect(received).toEqual(expected);
});
