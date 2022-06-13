import * as types from "./actiontype";

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USERS:
      return {
        ...state,
      };
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
  
    case types.UPDATE_USERS:
      return {
        ...state,
      };
    case types.DELETE_USERS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default usersReducer;
