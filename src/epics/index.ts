import {combineEpics} from 'redux-observable';
import {userEpic} from './user.epic';

export const rootEpics = combineEpics(userEpic);
