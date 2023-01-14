import { ulid } from 'ulid';
import { Entry } from '../types';

const initialEntries: Entry[] = [
  {
    id: ulid(),
    description: 'Work income',
    value: '1000.00',
    type: 'income',
  },
  {
    id: ulid(),
    description: 'Water bill',
    value: '90.00',
    type: 'expense',
  },
  {
    id: ulid(),
    description: 'Rent',
    value: '700.00',
    type: 'expense',
  },
  {
    id: ulid(),
    description: 'Power bill',
    value: '50.00',
    type: 'expense',
  },
];

export const reducer = (state = initialEntries, action: any) => {
  let newEntries: Entry[];
  switch (action.type) {
    case 'ADD_ENTRY':
      return (newEntries = [...state, { id: ulid(), ...action.payload }]);
    case 'REMOVE_ENTRY':
      newEntries = state.filter((e) => e.id != action.payload.id);
      return newEntries;
    case 'UPDATE_ENTRY':
      const entryIdx = state.findIndex((e) => e.id == action.payload.id);

      newEntries = [...state];
      if (entryIdx) {
        newEntries[entryIdx].description = action.payload.entry.description;
        newEntries[entryIdx].value = action.payload.entry.value;
        newEntries[entryIdx].type = action.payload.entry.type;
      }

      return newEntries;
    default:
      return state;
  }
};
