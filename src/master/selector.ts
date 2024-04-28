import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMaster = (state: { master: any }) => state.master || initialState;

const makeSelectMaster = () => createSelector(selectMaster, (subState) => subState);

const makeSelectBasketCount = () => createSelector(selectMaster, (subState) => subState.basket);

const makeSelectDialogStatus = () =>
  createSelector(selectMaster, (subState) => subState.dialogStatus);

export { makeSelectMaster, makeSelectBasketCount, makeSelectDialogStatus };
