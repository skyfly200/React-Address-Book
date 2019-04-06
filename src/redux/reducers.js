import { SET_QUERY, ADD_ADDRESS } from './actionTypes';

const initialState = {
  query: '',
  addresses: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUERY:
      return Object.assign({}, state, {
        query: action.query
      });
    case ADD_ADDRESS:
      return Object.assign({}, state, {
        addresses: [...state.addresses, action.entry]
      });
    default:
      return state;
  }
}

export default rootReducer;
