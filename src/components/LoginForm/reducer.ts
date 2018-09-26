import { Reducer } from 'redux';

import { LoginFormProps, LoginFormActionTypes } from './types';

// Type-safe initialState!
const initialState: LoginFormProps = {
  isPinging: false
};

export const paneGridReducer: Reducer<LoginFormProps> = (state = initialState, action): LoginFormProps => {
  switch (action.type) {
    case LoginFormActionTypes.PING: {
      return { ...state, isPinging: true };
    }
    case LoginFormActionTypes.PONG: {
      return { ...state, isPinging: false };
    }
    default: {
      return state;
    }
  }
};
