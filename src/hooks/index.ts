import {useSelector} from 'react-redux';
import {RootState} from '../reducers';

export function useFetching() {
  const fetching = useSelector(
    (rootState: RootState) => rootState.status.isFetching
  );
  return fetching;
}

export function useMessage() {
  const message = useSelector(
    (rootState: RootState) => rootState.status.message
  );
  return message;
}

export function useError() {
  const error = useSelector((rootState: RootState) => rootState.status.error);
  return error;
}
