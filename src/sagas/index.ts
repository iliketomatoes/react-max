import { all } from 'redux-saga/effects';
import fetchApi from './api';

export default function* rootSaga() {
  yield all([ fetchApi() ]);
}
