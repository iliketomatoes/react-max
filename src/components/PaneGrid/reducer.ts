import { Reducer } from 'redux';

import { PaneGridState, PaneGridActionTypes } from './types';

// Type-safe initialState!
const initialState: PaneGridState = {
  visiblePanes: 1
};

const reducer: Reducer<PaneGridState> = (state = initialState, action): PaneGridState => {
  switch (action.type) {
    case PaneGridActionTypes.TOGGLE_VIEW: {
      return { ...state, visiblePanes: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as paneGridReducer };
