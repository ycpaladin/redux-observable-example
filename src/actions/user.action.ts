import {Action} from 'redux';
import {User} from '../models/user';
import {IExcuteFailAction, IExcuteSucessAction, IExcuteingAction} from './base';

export enum UserActionType {
  LOGIN = '[UserAction] LOGIN',
  LOGIN_SUCESS = '[UserAction] LOGIN SUCESS',
  LOGIN_FAIL = '[UserAction] LOGIN FAIL',
  LOGOUT = '[UserAction] LOGOUT',
}

export class UserLoginAction implements Action<UserActionType> {
  readonly type = UserActionType.LOGIN;
  constructor(public userName: string, public userPassword: string) {}
}

export class UserLoginSucessAction implements Action<UserActionType> {
  readonly type = UserActionType.LOGIN_SUCESS;
  constructor(public user: User) {}
}

export class UserLoginFailAction implements Action<UserActionType> {
  readonly type = UserActionType.LOGIN_FAIL;
  constructor(public message: string) {}
}

export class UserLogoutAction implements Action<UserActionType> {
  readonly type = UserActionType.LOGOUT;
  constructor(public user: User) {}
}

export type Actions =
  | UserLoginAction
  | UserLogoutAction
  | UserLoginSucessAction
  | UserLoginFailAction;
