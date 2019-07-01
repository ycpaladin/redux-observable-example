import * as userActions from '../actions/user.action';

export interface State {
  isFetching: boolean;
  error: boolean;
  message?: string;
}

const defaultState: State = {
  isFetching: false,
  error: false,
};

export function reducer(
  state: State = defaultState,
  action: userActions.Actions
): State {
  switch (action.type) {
    case userActions.UserActionType.LOGIN:
      return {
        isFetching: true,
        error: false,
        message: undefined,
      };
    case userActions.UserActionType.LOGIN_SUCESS:
      return {
        isFetching: false,
        error: false,
      };
    case userActions.UserActionType.LOGIN_FAIL:
      return {
        isFetching: false,
        error: true,
        message: action.message,
      };
    default:
      return state;
  }
}
