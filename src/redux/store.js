import { createStore, combineReducers } from 'redux';

import {
  resultReducer,
} from './reducers';

const reducer = combineReducers({
  result: resultReducer,
});

const configureStore = () => {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configureStore;
