import actionTypes from './constants';
import type { AppState } from './data.d';
// action creator
export const deletePersonAction = (id: string) => {
  return {
    type: actionTypes.PERSON_DELETE,
    payload: id,
  };
};

// reducer
export const deletePersonReducer = (state: AppState, action) => {
  switch (action.type) {
    case actionTypes.PERSON_DELETE:
      return {
        ...state,
        personList: state.personList.filter((person) => person.id !== action.payload),
      };

    default:
      return state;
  }
};
