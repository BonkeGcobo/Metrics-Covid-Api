import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import homeReducer from './home';
import detailsReducer from './details';

const rootReducer = combineReducers({
  home: homeReducer,
  details: detailsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    logger,
    thunk,
  ),
);

export default store;
