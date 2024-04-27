import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from '../rootSaga';
import rootReducer from '../reducers';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   blacklist: ['products', 'sectionFilteredBooks'],
// };

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
