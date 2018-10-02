import { put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { ActionTypes } from '../actions';

export function* processData(payload: any): SagaIterator {
  try {
    yield put({ type: ActionTypes.api.FULFILLED, payload: 'Api call succeeded' });
  } catch (err) {
    yield put({ type: ActionTypes.api.REJECTED, payload: 'Api call failed' });
  }
}

export default function* fetchApi(): SagaIterator {
  yield takeEvery(ActionTypes.api.PENDING, processData);
}


