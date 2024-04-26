import { put, takeLatest } from 'redux-saga/effects';
import { setAllBooks } from './actions';
import { GET_ALL_BOOKS } from './constants';
import ApiStore from '../../request';

export interface ResponseGenerator {
  data: [
    {
      author?: string;
      description?: string;
      price?: string;
      image?: string;
      bookName?: string;
      id?: string;
    },
  ];
}

function* getAllBooksSaga() {
  try {
    const response: ResponseGenerator = yield ApiStore.books.get('');
    yield put(setAllBooks(response.data));
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

function* homeSaga() {
  yield takeLatest(GET_ALL_BOOKS, getAllBooksSaga);
}

export default homeSaga;
