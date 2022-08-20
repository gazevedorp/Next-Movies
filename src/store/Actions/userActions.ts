import {SET_USER, CLEAR_USER, UserActionTypes} from '../Types/userActionTypes';

export function setUser(payload: any): UserActionTypes {
  return {
    type: SET_USER,
    payload,
  };
}

export function clearUser(): UserActionTypes {
  return {
    type: CLEAR_USER,
  };
}
