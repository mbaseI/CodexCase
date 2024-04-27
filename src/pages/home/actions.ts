import { Book } from '../../types';
import { GET_ALL_BOOKS, SET_ALL_BOOKS, SET_LOADING } from './constants';

export function getAllBooks() {
  return {
    type: GET_ALL_BOOKS,
  };
}

export function setAllBooks(values: Book[]) {
  return {
    type: SET_ALL_BOOKS,
    values,
  };
}

export function setLoading(values: boolean) {
  return {
    type: SET_LOADING,
    values,
  };
}
