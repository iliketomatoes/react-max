import { combineEpics } from 'redux-observable';

import { pingEpic } from '../components/LoginForm/epics';

export const rootEpic = combineEpics(
  pingEpic,
);
