import { Reducer } from 'redux';

import { PanesStateToProps } from './types';
import { ActionTypes } from '../actions';

const initialState: PanesStateToProps = {
  visiblePanes: 1
};

const paneGridReducer: Reducer<typeof initialState> = (state = initialState, action): typeof initialState => {
  switch (action.type) {
    case ActionTypes.TOGGLE_VIEW: {
      return { ...state, visiblePanes: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default paneGridReducer;
