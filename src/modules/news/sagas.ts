import { takeEvery, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { EntitiesApi } from '../../typescript-fetch-client';
import { Entities } from './types';

const entities = new EntitiesApi();

import * as newsActions from './actions';

function* handleRequestEntities(action: newsActions.RequestEntitiesAction): SagaIterator {

  try {
    let result: Entities = yield call(() => {
      return entities.getEntities();
    });

    yield put(newsActions.requestEntities.done({ params: action.payload, result }));

  } catch (error) {
    yield put(newsActions.requestEntities.failed({ params: action.payload, error }));
  }
}

export default function* saga(): SagaIterator {
  yield takeEvery(newsActions.requestEntities.started, handleRequestEntities);
}
