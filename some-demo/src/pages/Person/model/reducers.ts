import { addPersonReducer } from './addPerson';
import { deletePersonReducer } from './deletePerson';
import { getPersonReducer } from './getPerson';

const reducers = [addPersonReducer, deletePersonReducer, getPersonReducer];

const initialState = {
  personList: [{ id: '1', name: '小萝莉' }],
};

export default function peopleReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
