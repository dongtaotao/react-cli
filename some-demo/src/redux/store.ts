import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

function configureStore() {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}

const storeData = configureStore();

export default storeData;
