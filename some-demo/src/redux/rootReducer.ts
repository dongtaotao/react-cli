import { combineReducers } from 'redux';

import personReducer from '@/pages/Person/model/reducers';

const reducerMap = {
  person: personReducer,
};

export default combineReducers(reducerMap);
