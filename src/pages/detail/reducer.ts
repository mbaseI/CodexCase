import { produce } from 'immer';
import { SET_BOOK, SET_LOADING } from './constants';
import { Book } from '../../types';

export interface InitialState {
  book: Book;
  loading: boolean;
}

interface Action {
  type: string;
  [key: string | number]: any;
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
