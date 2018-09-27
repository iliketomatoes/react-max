import { Reducer } from 'redux';
import { AuthState } from './types';
import { ActionTypes } from '../actions';

// Type-safe initialState!
export const initialAuthState: AuthState = {
  isPinging: false,
  isUserAuthenticated: false
};

export const authReducer: Reducer<AuthState> = (state = initialAuthState, action): AuthState => {
  switch (action.type) {
    case ActionTypes.PING: {
      return { ...state, isPinging: true };
    }
    case ActionTypes.PONG: {
      return { ...state, isPinging: false };
    }
    default: {
      return state;
    }
  }
};
