import { Reducer } from 'redux';
import { AuthState } from './types';
import { ActionTypes } from '../actions';

// Type-safe initialState!
export const initialAuthState: AuthState = {
  isAuthenticated: false
};

export const authReducer: Reducer<AuthState> = (state = initialAuthState, action): AuthState => {
  switch (action.type) {
    case ActionTypes.auth.LOG_IN: {
      console.log('log in');
      return { ...state, isAuthenticated: true };
    }
    case ActionTypes.auth.LOG_OUT: {
      console.log('log out');
      return { ...state, isAuthenticated: false };
    }
    default: {
      return state;
    }
  }
};
