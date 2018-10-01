import { Reducer } from 'redux';

import { PanesState } from './types';
import { ActionTypes } from '../actions';

export const initialPanesState: PanesState = {
  visiblePanes: 1
};

export const panesReducer: Reducer<PanesState> = (state = initialPanesState, action): PanesState => {
  switch (action.type) {
    case ActionTypes.panes.TOGGLE_VIEW: {
      return { ...state, visiblePanes: action.payload };
    }
    default: {
      return state;
    }
  }
};
