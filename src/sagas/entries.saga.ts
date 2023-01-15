import { call, put, take } from 'redux-saga/effects';
import { getEntries, populateEntries } from '../slices/entries.slice';

async function loadData() {
  const res = await fetch('http://localhost:3000/entries');
  return await res.json();
}

export function* loadEntries(): any {
  yield take(getEntries);
  const result = yield call(loadData);
  yield put(populateEntries(result));
}
