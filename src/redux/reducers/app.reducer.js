import { appAction } from 'constants/actions';

export const INITIAL_STATE = {
  check: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appAction.TEST_PROMISE_SUCCESS: {
      return {
        ...state,
        check: true,
      };
    }

    case appAction.TEST_PROMISE_FAILURE: {
      return {
        ...state,
        check: false,
      };
    }

    default:
      break;
  }
  return state;
};
