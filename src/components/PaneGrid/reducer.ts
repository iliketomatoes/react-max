import { Reducer } from 'redux';

import { PaneGridState, PaneGridActionTypes } from './types';

// Type-safe initialState!
const initialState: PaneGridState = {
  visiblePanes: 1
};

export const paneGridReducer: Reducer<PaneGridState> = (state = initialState, action): PaneGridState => {
  switch (action.type) {
    case PaneGridActionTypes.TOGGLE_VIEW: {
      return { ...state, visiblePanes: action.payload };
    }
    default: {
      return state;
    }
  }
};
