import * as userAction from '../actions/user.action';
import {User} from '../models/user';

export interface State {
  user?: User;
}

const defaultState: State = {};

export function reducer(
  state: State = defaultState,
  action: userAction.Actions
): State {
  switch (action.type) {
    case userAction.UserActionType.LOGIN_SUCESS:
      return {
        user: action.user,
      };
    default:
      return state;
  }
}
