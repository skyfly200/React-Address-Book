import { SET_QUERY, ADD_ADDRESS } from './actionTypes';

export const setQuery = query => ({
  type: SET_QUERY,
  query: query
});

export const addAddress = entry => ({
  type: ADD_ADDRESS,
  entry: entry
});
