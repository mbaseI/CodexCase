import { all } from 'redux-saga/effects';
import homeSaga from './pages/home/saga';

export function* rootSaga() {
  yield all([homeSaga()]);
}
