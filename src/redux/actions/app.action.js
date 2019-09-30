import { appAction } from 'constants/actions';

export const testPromiseSuccess = () => ({
  type: appAction.TEST_PROMISE,
  promise: Promise.resolve({}),
});

export const testPromiseFailure = () => ({
  type: appAction.TEST_PROMISE,
  promise: Promise.reject(new Error('Promise fail')),
});
