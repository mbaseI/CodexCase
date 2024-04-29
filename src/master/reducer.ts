import { produce } from 'immer';
import {
  ADD_TO_BASKET,
  DECREASE_ITEM,
  INCREASE_ITEM,
  SET_DIALOG_STATUS,
  SEARCH_FILTER,
} from './constants';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { Book } from '../types';

const persistConfig = {
  key: 'Master',
  storage: storage,
  blackList: ['searchFilter', 'dialogStatus'],
};

interface InitialState {
  basket: Book[];
  dialogStatus: boolean;
  searchFilter: Book[];
}

interface Action {
  type: string;
  [key: string | number]: any;
}

export const initialState: InitialState = {
  basket: [],
  dialogStatus: false,
  searchFilter: [],
};

const masterReducer = (state = initialState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_TO_BASKET: {
        if (draft.basket.some((x) => x.id === action.value.id)) {
          // eslint-disable-next-line prefer-const
          let item = draft.basket.find((y) => y.id === action.value.id);
          if (item) {
            item.count = (item.count ?? 0) + 1;
          }
        } else {
          draft.basket.push({ ...action.value, count: 1 });
        }
        break;
      }
      case SET_DIALOG_STATUS: {
        draft.dialogStatus = action.value;
        break;
      }
      case INCREASE_ITEM: {
        const index = draft.basket.findIndex((y) => y.id === action.id);
        if (index !== -1) {
          // eslint-disable-next-line prefer-const
          let basketItem = draft.basket[index];
          if (typeof basketItem.count === 'number') basketItem.count++;
        }
        break;
      }
      case DECREASE_ITEM:
        {
          const index = draft.basket.findIndex((y) => y.id === action.id);
          if (index !== -1) {
            // eslint-disable-next-line prefer-const
            let basketItem = draft.basket[index];
            if (typeof basketItem.count === 'number') basketItem.count--;
            if (typeof basketItem.count === 'number' && basketItem.count < 1)
              draft.basket.splice(index, 1);
          }
        }
        break;
      case SEARCH_FILTER:
        draft.searchFilter = action.data.slice(0, 3);
        break;
      default:
        break;
    }
  });

export default persistReducer(persistConfig, masterReducer);
