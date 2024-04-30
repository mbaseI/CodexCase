import { Book } from '../../types';
import { GET_BOOKS, SET_BOOKS, SET_LOADING } from './constants';

export function getBooks() {
  return {
    type: GET_BOOKS,
  };
}

export function setBooks(values: Book[]) {
  return {
    type: SET_BOOKS,
    values,
  };
}

export function setLoading(values: boolean) {
  return {
    type: SET_LOADING,
    values,
  };
}
