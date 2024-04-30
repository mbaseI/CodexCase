import { produce } from 'immer';
import { SET_BOOKS, SET_LOADING } from './constants';
import { Book } from '../../types';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'Home',
  storage: storage,
  blacklist: ['sectionFilteredBooks', 'loading'],
};

export interface InitialState {
  products: Book[];
  sectionFilteredBooks: Book[];
  loading: boolean;
}

export const initialState = {
  products: [],
  sectionFilteredBooks: [],
  loading: true,
};

const homeReducer = (state = initialState, action: { type: string; values: any }) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_BOOKS:
        draft.products = action.values;
        break;
      case SET_LOADING:
        draft.loading = action.values;
        break;
      default:
        break;
    }
  });

export default persistReducer(persistConfig, homeReducer);
