import { combineEpics } from 'redux-observable';

import { pingEpic } from './auth';

const rootEpic = combineEpics(
  pingEpic,
);

export default rootEpic;
