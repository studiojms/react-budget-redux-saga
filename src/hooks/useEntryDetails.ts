import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEntry, updateEntry } from '../actions/entries.action';
import { RootState } from '../types';

function useEntryDetails(id?: string) {
  const [description, setDescription] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [isExpense, setIsExpense] = useState<boolean>(false);

  const dispatch = useDispatch();
  const entryToEdit = useSelector((state: RootState) => state.entries.find((e) => e.id == id));

  const loadData = () => {
    if (entryToEdit) {
      setDescription(entryToEdit.description);
      setValue(entryToEdit.value);
      setIsExpense(entryToEdit.type == 'expense');
    }
  };

  const clearFields = () => {
    setDescription('');
    setValue('');
    setIsExpense(false);
  };

  const onAddEntry = () => {
    dispatch(addEntry({ description, value, type: isExpense ? 'expense' : 'income' }));
    clearFields();
  };

  const onUpdateEntry = (id: string) => {
    dispatch(updateEntry(id, { id, description, value, type: isExpense ? 'expense' : 'income' }));
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
