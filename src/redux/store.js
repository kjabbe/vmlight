import { createStore, combineReducers } from 'redux';

import {
  resultReducer,
  fixturesReducer,
} from './reducers';

const reducer = combineReducers({
  result: resultReducer,
  fixtures: fixturesReducer,
});

const configureStore = () => {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configureStore;
