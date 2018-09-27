import { action } from 'typesafe-actions';
import { ActionTypes } from './types';
import { VisiblePanes } from '../reducers/';

export const toggleView = (nOfPanels: VisiblePanes) => action(ActionTypes.TOGGLE_VIEW, nOfPanels);
