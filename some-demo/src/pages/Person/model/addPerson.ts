// actions
import actionTypes from './constants';
import type { AppState } from './data.d';

// action creator
export const addPersonAction = (personName: string) => {
  return {
    type: actionTypes.PERSON_ADD,
    payload: { id: (Math.random() * 100).toFixed(3), name: personName },
  };
};

// reducer
export const addPersonReducer = (state: AppState, action) => {
  switch (action.type) {
    case actionTypes.PERSON_ADD:
      return {
        ...state,
        personList: state.personList.concat([action.payload]),
      };

    default:
      return state;
  }
};
