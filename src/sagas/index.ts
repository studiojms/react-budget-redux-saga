import { SagaMiddleware } from 'redux-saga';
import * as entriesSaga from './entries.saga';

export function initSagas(sagaMiddleware: SagaMiddleware) {
  //@ts-ignore
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
