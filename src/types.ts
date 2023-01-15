export type OperationType = 'income' | 'expense';

export type Entry = {
  id: string;
  description: string;
  value: number;
  type: OperationType;
};

export interface RootState {
  entries: { entries: Entry[] };
  modals: { isOpen: boolean; id: string };
}
