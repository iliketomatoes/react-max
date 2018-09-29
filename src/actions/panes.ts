import { action } from 'typesafe-actions';
import { ActionTypes } from './types';
import { VisiblePanes } from '../models';

export const toggleView = (nOfPanels: VisiblePanes) => action(ActionTypes.panes.TOGGLE_VIEW, nOfPanels);
