import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {createLogger} from 'redux-logger';
import {createConvertActionMiddleware} from './middlewares/convertActionMiddleware';
import {RootState, rootReducer} from './reducers';
import {AllActions} from './actions';
import {rootEpics} from './epics';

interface Options {}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
// declare const __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;

const epicMiddleware = createEpicMiddleware();
const loggerMiddleware = createLogger();
const convertAciotnMiddleware = createConvertActionMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://extension.remotedev.io/docs/API/Arguments.html
      // actionCreators,
      trace: true,
      traceLimit: 25,
    })
  : compose;
const enhancers = [
  applyMiddleware(convertAciotnMiddleware, epicMiddleware, loggerMiddleware),
];
const enhancer = composeEnhancers(...enhancers);

export const store = createStore<RootState, AllActions, {}, {}>(
  rootReducer,
  enhancer
  // applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpics);
