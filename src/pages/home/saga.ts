import { put, takeLatest } from 'redux-saga/effects';
import { setAllBooks, setLoading } from './actions';
import { GET_ALL_BOOKS } from './constants';
import ApiStore from '../../request';
import { Book } from '../../types';

export interface ResponseGenerator {
  data: Book[];
}

function* getAllBooksSaga() {
  try {
    const response: ResponseGenerator = yield ApiStore.books.get('');
    yield put(setLoading(true));
    yield put(setAllBooks(response.data));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    console.log(e);
  }
}

function* homeSaga() {
  yield takeLatest(GET_ALL_BOOKS, getAllBooksSaga);
}

export default homeSaga;
