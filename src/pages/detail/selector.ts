import { createSelector } from 'reselect';
import { InitialState, initialState } from './reducer';

const selectDetail = (state: { detail: InitialState }) => state.detail || initialState;

const makeSelectDetail = () => createSelector(selectDetail, (subState) => subState);

const makeSelectLoading = () => createSelector(selectDetail, (subState) => subState.loading);

const makeSelectBookDetail = () => createSelector(selectDetail, (subState) => subState.book);

export { makeSelectDetail, makeSelectBookDetail, makeSelectLoading };
