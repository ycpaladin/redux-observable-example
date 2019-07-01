import {combineReducers, AnyAction, ReducersMapObject} from 'redux';
import {AllActions} from '../actions';
import * as userReducer from './user';
import * as statusReducer from './status';

export interface RootState {
  user: userReducer.State;
  status: statusReducer.State;
}

export const rootReducer = combineReducers<RootState, AllActions>({
  user: userReducer.reducer,
  status: statusReducer.reducer,
});
