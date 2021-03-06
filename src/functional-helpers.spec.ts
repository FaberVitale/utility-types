import { getReturnOfExpression } from './functional-helpers';

// @dts-jest:group getReturnOfExpression
{
  const increment = () => ({ type: 'INCREMENT' as 'INCREMENT' });
  // @dts-jest:pass:snap
  getReturnOfExpression(increment); // => undefined
}
