const initialState = {
  query: '',
  addresses: []
};

const SET_QUERY = 'SET_QUERY';
const ADD_ADDRESS = 'ADD_ADDRESS';

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUERY:
      return Object.assign({}, state, {
        query: action.query
      });
    case ADD_ADDRESS:
      return Object.assign({}, state, {
        addresses: [...state.addresses, action.address]
      });
    default:
      return state;
  }
}

export default rootReducer;
