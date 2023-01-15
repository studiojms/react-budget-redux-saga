import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEntry, updateEntry } from '../slices/entries.slice';
import { RootState } from '../types';

function useEntryDetails(id?: string) {
  const [description, setDescription] = useState<string>('');
  const [value, setValue] = useState<number>(0);
  const [isExpense, setIsExpense] = useState<boolean>(false);

  const dispatch = useDispatch();
  const entryToEdit = useSelector((state: RootState) => state.entries.entries.find((e) => e.id == id));

  const loadData = () => {
    if (entryToEdit) {
      setDescription(entryToEdit.description);
      setValue(entryToEdit.value);
      setIsExpense(entryToEdit.type == 'expense');
    }
  };

  const clearFields = () => {
    setDescription('');
    setValue(0);
    setIsExpense(false);
  };

  const onAddEntry = () => {
    dispatch(addEntry({ description, value, type: isExpense ? 'expense' : 'income' }));
    clearFields();
  };

  const onUpdateEntry = (id: string) => {
    dispatch(updateEntry({ id, entry: { id, description, value, type: isExpense ? 'expense' : 'income' } }));
    clearFields();
  };

  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    onAddEntry,
    onUpdateEntry,
    clearFields,
    loadData,
  };
}

export default useEntryDetails;
