import { produce } from 'immer';
import { SET_ALL_BOOKS, SET_LOADING } from './constants';

export const initialState = {
  products: [],
  sectionFilteredBooks: [],
  loading: true,
};

const homeReducer = (state = initialState, action: { type: string; values: any }) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_BOOKS:
        draft.products = action.values;
        break;
      case SET_LOADING:
        draft.loading = action.values;
        break;
      default:
        break;
    }
  });

export default homeReducer;
