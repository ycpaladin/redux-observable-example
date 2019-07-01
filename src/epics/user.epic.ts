import {Observable, of, merge, from} from 'rxjs';
import {
  switchMap,
  map,
  filter,
  mergeMap,
  catchError,
  withLatestFrom,
  combineLatest,
} from 'rxjs/operators';
import {ofType, Epic, StateObservable} from 'redux-observable';
import {
  Actions,
  UserActionType,
  UserLoginAction,
  UserLoginSucessAction,
  UserLoginFailAction,
} from '../actions/user.action';
import {userLogin} from '../services';
import {RootState} from '../reducers';
import {User} from '../models/user';

const getUser = (
  rootState$: Observable<RootState>
): Observable<User | undefined> =>
  rootState$.pipe(
    // mergeMap(rootState => of(rootState.user.user))
    map(rootState => rootState.user.user)
  );

export const userEpic: Epic = (
  actions$: Observable<Actions>,
  state$: StateObservable<RootState>
) => {
  return actions$.pipe(
    ofType<Actions, UserLoginAction, UserActionType.LOGIN>(
      UserActionType.LOGIN
    ),
    withLatestFrom(
      state$,
      (action, rootState): [UserLoginAction, boolean] => [
        action,
        rootState.user.user !== undefined,
      ]
    ),
    switchMap(([action, userLogged]) => {
      if (!userLogged) {
        return userLogin(action.userName, action.userPassword).pipe(
          map(user => new UserLoginSucessAction(user)),
          catchError((error: Error) =>
            of(new UserLoginFailAction(error.message))
          )
        );
      } else {
        return of(new UserLoginFailAction('已经登陆过了！'));
      }
    })
  );
};
