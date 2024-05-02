import { produce } from 'immer';
import {
  SET_BASKET,
  DECREASE_ITEM,
  INCREASE_ITEM,
  SET_DIALOG_STATUS,
  SEARCH_FILTER,
  SET_MODAL,
} from './constants';
import { Book } from '../types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'Master',
  storage: storage,
  blacklist: ['searchFilter', 'dialogStatus', 'activeModal'],
};

export interface InitialState {
  basket: Book[];
  dialogStatus: boolean;
  searchFilter: Book[];
  activeModal: {
    id?: string;
    isOpen?: boolean;
  };
}

interface Action {
  type: string;
  [key: string | number]: any;
}

export const initialState: InitialState = {
  basket: [],
  dialogStatus: false,
  searchFilter: [],
  activeModal: {},
};

const masterReducer = (state = initialState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_BASKET: {
        if (draft.basket.some((x) => x.id === action.value.id)) {
          // eslint-disable-next-line prefer-const
          let item = draft.basket.find((y) => y.id === action.value.id);
          if (item) {
            item.count = (item.count ?? 0) + 1;
          }
        } else {
          draft.basket.push({ ...action.value, count: 1 });
        }
        if (Array.isArray(action.value) && !action.value.length) draft.basket = [];
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
      case SET_MODAL:
        draft.activeModal = {
          id: action.id,
          isOpen: action.isOpen,
        };
        if (draft.activeModal.id === 'Checkout') draft.dialogStatus = false;
        if (!draft.activeModal.isOpen) draft.activeModal = {};
        break;
      default:
        break;
    }
  });

export default persistReducer(persistConfig, masterReducer);
