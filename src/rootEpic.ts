import { combineEpics } from 'redux-observable';
import { loginEpic } from 'src/Auth/epics';

const rootEpic = combineEpics(
  loginEpic
);

export default rootEpic;
