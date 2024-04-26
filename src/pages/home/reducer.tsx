import { produce } from 'immer';
import { SET_ALL_BOOKS } from './constants';

export const initialState = {
  producuts: [],
};

const homeReducer = (state = initialState, action: { type: any; values: any }) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_BOOKS:
        draft.producuts = action.values;
        break;
      default:
        break;
    }
  });

export default homeReducer;
