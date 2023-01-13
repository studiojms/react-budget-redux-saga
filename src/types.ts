export type OperationType = 'income' | 'expense';

export type Entry = {
  id: string;
  description: string;
  value: string;
  type: OperationType;
};
