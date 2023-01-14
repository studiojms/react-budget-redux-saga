import { Entry } from '../types';

export const addEntry = (payload: any) => {
  return { type: 'ADD_ENTRY', payload };
};

export const removeEntry = (id: string) => {
  return { type: 'REMOVE_ENTRY', payload: { id } };
};

export const updateEntry = (id: string, entry: Entry) => {
  return { type: 'UPDATE_ENTRY', payload: { id, entry } };
};
