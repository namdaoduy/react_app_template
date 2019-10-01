import { appAction } from 'constants/actions';
import { get } from 'utils/request';

export const testPromiseSuccess = () => ({
  type: appAction.TEST_PROMISE,
  promise: get('http://www.mocky.io/v2/5d92f08530000073001b70f8'),
});

export const testPromiseFailure = () => ({
  type: appAction.TEST_PROMISE,
  promise: get('http://www.mocky.io/v2/5d92f22730000051001b70ff'),
});
