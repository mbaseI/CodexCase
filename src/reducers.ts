import { combineReducers } from 'redux';
import homeReducer from './pages/home/reducer';
import masterReducer from './master/reducer';
import detailReducer from './pages/detail/reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  master: masterReducer,
  detail: detailReducer,
});

export default rootReducer;
