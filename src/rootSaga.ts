import { all } from 'redux-saga/effects';
import homeSaga from './pages/home/saga';
import detailSaga from './pages/detail/saga';

export function* rootSaga() {
  yield all([homeSaga(), detailSaga()]);
}
