import { action } from 'typesafe-actions';

import { PaneGridActionTypes, VisiblePanesCount } from './types';

export const toggleView = (nOfPanels: VisiblePanesCount) => action(PaneGridActionTypes.TOGGLE_VIEW, nOfPanels);
