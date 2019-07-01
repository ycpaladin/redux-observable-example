import {Middleware} from 'redux';

/**
 * 创建一个中间件，负责把一个具体的Aciotn类实例转换成一个Object实例
 */
export function createConvertActionMiddleware(): Middleware {
  return store => next => action => {
    next({...action});
  };
}
