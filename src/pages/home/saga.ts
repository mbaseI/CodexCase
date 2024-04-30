import { put, takeLatest } from 'redux-saga/effects';
import { setBooks, setLoading } from './actions';
import { GET_BOOKS } from './constants';
import ApiStore from '../../request';
import { Book } from '../../types';

export interface ResponseGenerator {
  data: Book[];
}

function* getBooksSaga() {
  try {
    const response: ResponseGenerator = yield ApiStore.books.get('');
    yield put(setLoading(true));
    yield put(setBooks(response.data));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    console.log(e);
  }
}

function* homeSaga() {
  yield takeLatest(GET_BOOKS, getBooksSaga);
}

export default homeSaga;
