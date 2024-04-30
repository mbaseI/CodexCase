import { createSelector } from 'reselect';
import { InitialState, initialState } from './reducer';

const selectMaster = (state: { master: InitialState }) => state.master || initialState;

const makeSelectMaster = () => createSelector(selectMaster, (subState) => subState);

const makeSelectBasketCount = () => createSelector(selectMaster, (subState) => subState.basket);

const makeSelectDialogStatus = () =>
  createSelector(selectMaster, (subState) => subState.dialogStatus);

const makeSelectBasketPrice = () =>
  createSelector(selectMaster, (subState) => {
    return subState.basket?.reduce((accumulator: any, object: any) => {
      return accumulator + object.price * object.count;
    }, 0);
  });

const makeSelectFilteredItems = () =>
  createSelector(selectMaster, (subState) => subState.searchFilter);

export {
  makeSelectMaster,
  makeSelectBasketCount,
  makeSelectDialogStatus,
  makeSelectBasketPrice,
  makeSelectFilteredItems,
};
