import { Book } from '../types';
import {
  SET_BASKET,
  DECREASE_ITEM,
  INCREASE_ITEM,
  SET_DIALOG_STATUS,
  SEARCH_FILTER,
  SET_MODAL,
} from './constants';

export function setBasket(value: Book | []) {
  return {
    type: SET_BASKET,
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

export function setModal(id: string, isOpen: boolean) {
  return {
    type: SET_MODAL,
    id,
    isOpen,
  };
}
