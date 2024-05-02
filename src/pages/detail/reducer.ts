import { produce } from 'immer';
import { SET_BOOK, SET_LOADING } from './constants';
import { Action, Book } from '../../types';

export interface InitialState {
  book: Book;
  loading: boolean;
}

export const initialState: InitialState = {
  book: {},
  loading: true,
};

const detailReducer = (state = initialState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_BOOK:
        draft.book = action.data;
        break;
      case SET_LOADING:
        draft.loading = action.value;
        break;
      default:
        break;
    }
  });

export default detailReducer;
