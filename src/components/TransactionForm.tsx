import { Form } from 'semantic-ui-react';
import { OperationType } from '../types';
import SaveOrCancelButton from './SaveOrCancelButton';
import TransactionFormFields from './TransactionFormFields';

interface FormProps {
  description: string;
  value: string;
  isExpense: boolean;
  setDescription: (val: string) => void;
  setValue: (val: string) => void;
  setIsExpense: (val: boolean) => void;
  onAddEntry: (description: string, value: string, type: OperationType) => void;
}

function TransactionForm({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
  onAddEntry,
}: FormProps) {
  const clearFields = () => {
    setDescription('');
    setValue('');
    setIsExpense(false);
  };

  const onSave = () => {
    onAddEntry(description, value, isExpense ? 'expense' : 'income');
    clearFields();
  };

  return (
    <Form unstackable>
      <TransactionFormFields
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <SaveOrCancelButton onSave={onSave} onCancel={() => clearFields()} />
    </Form>
  );
}

export default TransactionForm;
