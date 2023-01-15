import { call, fork, put, take, takeLatest } from 'redux-saga/effects';
import { addEntry, getEntries, populateEntries, populateEntryDetails } from '../slices/entries.slice';

async function loadEntriesData() {
  const res = await fetch('http://localhost:3000/entries');
  return await res.json();
}

async function loadEntryValueData(id: string) {
  const res = await fetch(`http://localhost:3000/values/${id}`);
  return await res.json();
}

export function* loadEntries(): any {
  yield take(getEntries);
  const result = yield call(loadEntriesData);
  yield put(populateEntries(result));
}

export function* loadEntryDetails(id: string): any {
  const result = yield call(loadEntryValueData, id);
  yield put(populateEntryDetails(result));
}

export function* loadEntriesDetails(): any {
  const { payload } = yield take(populateEntries);

  for (const entry of payload) {
    yield fork(loadEntryDetails, entry.id);
  }
}

export function* createEntry(): any {
  yield takeLatest(addEntry, createNewEntry);
}

async function* createNewEntry(data: any) {
  const res = await fetch('http://localhost:3000/entries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data.payload),
  });

  return await res.json();
}
