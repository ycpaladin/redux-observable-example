import {Observable} from 'rxjs';
import {User} from '../models/user';

export function userLogin(
  userName: string,
  userPassword: string
): Observable<User> {
  return new Observable<User>(observer => {
    const t = window.setTimeout(() => {
      const user: User = {
        id: '1',
        name: 'kevin',
        age: 33,
      };
      observer.next(user);
      // observer.error(new Error('登陆出现错误！！！！'));
      return () => {
        window.clearTimeout(t);
        console.log('1111');
      };
    }, 1000);
  });
}
