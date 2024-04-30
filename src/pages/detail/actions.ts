import { Book } from '../../types';
import { GET_BOOK, SET_BOOK, SET_LOADING } from './constants';

export function getBook(id: string) {
  return {
    type: GET_BOOK,
    id,
  };
}

export function setBook(data: Book[]) {
  return {
    type: SET_BOOK,
    data,
  };
}

export function setLoading(value: boolean) {
  return {
    type: SET_LOADING,
    value,
  };
}
