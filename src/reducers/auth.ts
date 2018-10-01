import { Reducer } from 'redux';
import { AuthState } from './types';
import { ActionTypes } from '../actions';

// Type-safe initialState!
export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: {}
};

export const authReducer: Reducer<AuthState> = (state = initialAuthState, action): AuthState => {
  switch (action.type) {
    case ActionTypes.auth.LOG_IN: {
      return { ...state, isAuthenticated: true, user: {
        email: action.payload
      } };
    }
    case ActionTypes.auth.LOG_OUT: {
      return { ...state, isAuthenticated: false };
    }
    default: {
      return state;
    }
  }
};
