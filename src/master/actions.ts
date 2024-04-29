import { Book } from '../types';
import {
  ADD_TO_BASKET,
  DECREASE_ITEM,
  INCREASE_ITEM,
  SET_DIALOG_STATUS,
  SEARCH_FILTER,
} from './constants';

export function addToBasket(value: Book) {
  return {
    type: ADD_TO_BASKET,
    value,
  };
}

export function setDialogStatus(value: boolean) {
  return {
    type: SET_DIALOG_STATUS,
    value,
  };
}

export function increaseItem(id: string) {
  return {
    type: INCREASE_ITEM,
    id,
  };
}

export function decreaseItem(id: string) {
  return {
    type: DECREASE_ITEM,
    id,
  };
}

export function searchFilter(data: Book[]) {
  return {
    type: SEARCH_FILTER,
    data,
  };
}
