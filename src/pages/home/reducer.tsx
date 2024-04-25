import { produce } from 'immer';
import { SET_COUNT } from './constants';

export const initialState = {
  count: 0,
};

const homeReducer = (state = initialState, action: { type: any; values: number }) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_COUNT:
        draft.count = action.values;
        break;
      default:
        break;
    }
  });

export default homeReducer;
