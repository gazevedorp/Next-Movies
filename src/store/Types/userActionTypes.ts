// Type of action's type
export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

//Interfaces
interface SetUserAction {
  type: typeof SET_USER;
  payload: Object;
}

interface ClearUserAction {
  type: typeof CLEAR_USER;
}

export type UserActionTypes = SetUserAction | ClearUserAction;
