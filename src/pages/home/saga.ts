import { put, takeLatest } from 'redux-saga/effects';
import { setCount } from './actions';
import { GET_PLAYERS } from './constants';
import ApiStore from '../../request';

export interface ResponseGenerator {
  data?: any;
}

function* getUsersSaga() {
  try {
    const users: ResponseGenerator = yield ApiStore.users.get('');
    yield put(setCount(5));
    console.log(users);
  } catch (e) {
    console.log(e);
  }
}

function* homeSaga() {
  yield takeLatest(GET_PLAYERS, getUsersSaga);
}

export default homeSaga;
