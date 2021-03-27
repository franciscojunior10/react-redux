import { all } from 'redux-saga/effects';

import { SagaIterator } from 'redux-saga';
import cart from './cart/sagas';

export default function* rootSaga(): SagaIterator {
  return yield all([cart]);
}
