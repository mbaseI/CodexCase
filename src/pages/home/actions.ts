import { GET_ALL_BOOKS, SET_ALL_BOOKS } from './constants';

export function getAllBooks() {
  return {
    type: GET_ALL_BOOKS,
  };
}

export function setAllBooks(values: any) {
  return {
    type: SET_ALL_BOOKS,
    values,
  };
}
