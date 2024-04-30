import { createSelector } from 'reselect';
import { InitialState, initialState } from './reducer';

const selectHome = (state: { home: InitialState }) => state.home || initialState;

const makeSelectHome = () => createSelector(selectHome, (subState) => subState);

const makeSelectBooks = () => createSelector(selectHome, (subState) => subState.products);

const makeSelectLoading = () => createSelector(selectHome, (subState) => subState.loading);

export { makeSelectHome, makeSelectBooks, makeSelectLoading };
