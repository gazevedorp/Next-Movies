import {SET_USER, CLEAR_USER, UserActionTypes} from '../Types/userActionTypes';

const initialState = {
  Token: '',
  data: {}
};

const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_USER:
      return {
        Token: '',
      };
    default:
      return state;
  }
};

export default userReducer;
