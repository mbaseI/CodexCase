import { put, takeLatest } from 'redux-saga/effects';
import ApiStore from '../../request';
import { setBook, setLoading } from './actions';
import { GET_BOOK } from './constants';
import { Action, Book } from '../../types';

export interface ResponseGenerator {
  data: Book[];
}

function* getBookSaga(action: Action) {
  try {
    console.log(action);
    const response: ResponseGenerator = yield ApiStore.books.get(action.id);
    yield put(setLoading(true));
    yield put(setBook(response.data));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    console.log(e);
  }
}

function* detailSaga() {
  yield takeLatest(GET_BOOK, getBookSaga);
}

export default detailSaga;
