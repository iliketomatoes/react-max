import { action } from 'typesafe-actions';

import { ActionTypes } from './types';

export const callApi = () => action(ActionTypes.api.PENDING);
