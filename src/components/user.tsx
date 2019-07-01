import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {UserActionType, UserLoginAction} from '../actions/user.action';
import {User} from '../models/user';
import {RootState} from '../reducers';
import {Dispatch} from 'redux';

interface Props {}

export function UserLogin(props: Props) {
  const dispatch = useDispatch<Dispatch<UserLoginAction>>();
  const user = useSelector<RootState, User | undefined>(
    rootState => rootState.user.user
  );
  const isFetching = useSelector<RootState, boolean>(
    rootState => rootState.status.isFetching
  );
  const message = useSelector<RootState, string | undefined>(
    rootState => rootState.status.message
  );
  const handClick = React.useCallback(() => {
    dispatch(new UserLoginAction('kevin', '123123'));
  }, []);
  return (
    <>
      {message && <div style={{color: 'red'}}>{message}</div>}
      {isFetching && <div>正在加载数据！</div>}
      <button type="button" onClick={handClick}>
        Login
      </button>

      {user && <div>{user.name}</div>}
    </>
  );
}
