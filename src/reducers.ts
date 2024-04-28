import { combineReducers } from 'redux';
import homeReducer from './pages/home/reducer';
import masterReducer from './master/reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  master: masterReducer,
});

export default rootReducer;
