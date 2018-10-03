/**
 * The root saga file that defines the root saga.
 */

import { all } from 'redux-saga/effects';

/* Import module sagas */
// import authSaga from './auth/sagas';
import newsSaga from './news/sagas';

/** The root saga that starts all of the other sagas. */
export default function* rootSaga() {
    yield all([
        /* The News saga */
        newsSaga(),

        /* The authentication saga */
        // authSaga(),
    ]);
}
